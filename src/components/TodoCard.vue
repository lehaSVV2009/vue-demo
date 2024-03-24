<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({ todo: { type: Object, required: true } });
const emit = defineEmits(['back']);

const back = () => {
  emit('back', props.todo);
}
</script>

<template>
  <v-card>
    <v-card-text :class="todo.completed ? 'bg-green' : 'bg-red'">{{
      todo.completed ? "Completed" : "To do"
    }}</v-card-text>
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-subtitle>{{ todo.user?.email }}, {{ todo.user?.name }}</v-card-subtitle>
    <v-card-actions>
      <v-btn @click="back">Back</v-btn>
    </v-card-actions>
  </v-card>
</template>