<script setup>
import { onMounted, reactive, ref } from "vue";

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
let todos = reactive([]);

onMounted(() => {
  isFetchingTodos.value = true;
  Promise.all([fetchAllTodos(), fetchAllUsers()])
    .then(([serverTodos, serverUsers]) => {
      todos = serverTodos.map((todo) => {
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
</script>

<template>
  <h1>Vue 3 Todos</h1>
  <div v-if="isFetchingTodos">Loading todos...</div>
  <todo-list-item
    v-else
    class="mt-2"
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
  />
</template>