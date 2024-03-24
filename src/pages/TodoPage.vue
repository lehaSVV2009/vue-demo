<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { fetchTodoById, fetchUserById } from "@/posts-client";
import TodoCard from "@/components/TodoCard.vue";

const isLoadingTodo = ref(false);
const todo = reactive({});

const route = useRoute();
const todoId = route.params.id;

const fetchTodo = async () => {
  try {
    isLoadingTodo.value = true;
    const todoResponse = await fetchTodoById(todoId);
    const serverTodo = todoResponse.data;
    todo.id = serverTodo.id;
    todo.completed = serverTodo.completed;
    todo.title = serverTodo.title;
    if (serverTodo.userId) {
      const userResponse = await fetchUserById(serverTodo.userId);
      todo.user = userResponse.data;
    }
  } catch (e) {
    console.log(e);
    for (const prop of Object.getOwnPropertyNames(todo)) {
      delete todo[prop];
    }
  } finally {
    isLoadingTodo.value = false;
  }
};

onMounted(fetchTodo);

const router = useRouter();
const back = () => {
  router.push('/vue3-todos');
}
</script>

<template>
  <v-progress-linear indeterminate v-if="isLoadingTodo" />
  <div v-else-if="!todo.id">Todo not found</div>
  <todo-card v-else :todo="todo" @back="back" />
</template>