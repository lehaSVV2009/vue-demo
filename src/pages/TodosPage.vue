<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import TodoListItem from "@/components/TodoListItem.vue";
import { fetchTodos, fetchUsers } from "@/posts-client";

const fetchAllTodos = async () => {
  try {
    const response = await fetchTodos();
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const fetchAllUsers = async () => {
  try {
    const usersResponse = await fetchUsers();
    return usersResponse.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const isFetchingTodos = ref(false);
const todos = ref([]);
const completedFilter = ref("");
const searchText = ref("");

const COMPLETED_TYPES = reactive([
  {
    title: "All",
    value: "",
  },
  {
    title: "Completed",
    value: "completed",
  },
  {
    title: "To Do",
    value: "todo",
  },
]);

onMounted(() => {
  isFetchingTodos.value = true;
  Promise.all([fetchAllTodos(), fetchAllUsers()])
    .then(([serverTodos, serverUsers]) => {
      todos.value = serverTodos.map((todo) => {
        const user = serverUsers.find((user) => user.id === todo.userId);
        if (user) {
          todo.user = user;
        }
        return todo;
      });
    })
    .finally(() => {
      isFetchingTodos.value = false;
    });
});

const filterCompletedTodos = (completedFilter, todos) => {
  if (completedFilter === "completed") {
    return todos.filter((todo) => todo.completed);
  }
  if (completedFilter === "todo") {
    return todos.filter((todo) => !todo.completed);
  }
  return todos;
};

const filteredAndSearchedCompletedTodos = computed(() => {
  const filteredTodos = filterCompletedTodos(
    completedFilter.value,
    todos.value
  );
  if (!searchText.value) {
    return filteredTodos;
  }
  return filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const router = useRouter();
const openTodo = (todo) => {
  router.push(`/vue3-todos/${todo.id}`);
};
</script>

<template>
  <v-row>
    <v-col cols="12" md="3"><h1>Vue 3 Todos</h1></v-col>
    <v-col cols="12" md="6">
      <v-text-field v-model="searchText" placeholder="Search..." />
    </v-col>
    <v-col cols="12" md="3">
      <v-select
        :items="COMPLETED_TYPES"
        v-model="completedFilter"
        label="Select completed type"
      />
    </v-col>
  </v-row>
  <div v-if="isFetchingTodos">Loading todos...</div>
  <v-row v-else>
    <v-col
      cols="12"
      md="3"
      v-for="todo in filteredAndSearchedCompletedTodos"
      :key="todo.id"
    >
      <todo-list-item :todo="todo" @open-todo="openTodo"></todo-list-item>
    </v-col>
  </v-row>
</template>