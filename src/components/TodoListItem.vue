<script setup>
import { defineProps } from "vue";

defineProps({ todo: { type: Object, required: true } });
</script>

<template>
  <v-card>
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-subtitle>{{ todo.user?.email }}</v-card-subtitle>
    <v-card-text :class="todo.completed ? 'bg-green' : 'bg-red'">{{
      todo.completed ? "Completed" : "To do"
    }}</v-card-text>
  </v-card>
</template>