<script setup>
import { computed, onMounted, reactive, ref } from "vue";

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

const COMPLETED_TYPES = reactive([
  {
    title: "",
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

const filteredCompletedTodos = computed(() => {
  if (completedFilter.value === "completed") {
    return todos.value.filter((todo) => todo.completed);
  }
  if (completedFilter.value === "todo") {
    return todos.value.filter((todo) => !todo.completed);
  }
  return todos.value;
});
</script>

<template>
  <v-row>
    <v-col cols="3"><h1>Vue 3 Todos</h1></v-col>
    <v-col cols="3" offset="6">
      <v-select
        :items="COMPLETED_TYPES"
        v-model="completedFilter"
        label="Select completed type"
      />
    </v-col>
  </v-row>
  <div v-if="isFetchingTodos">Loading todos...</div>
  <v-row v-else>
    <v-col cols="3" v-for="todo in filteredCompletedTodos" :key="todo.id">
      <todo-list-item :todo="todo"></todo-list-item>
    </v-col>
  </v-row>
</template>