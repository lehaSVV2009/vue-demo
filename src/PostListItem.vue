<template>
  <v-card>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-text>{{ post.description }}</v-card-text>
    <v-card-actions>
      <v-btn
        prepend-icon="mdi-delete-forever"
        color="teal-accent-4"
        variant="text"
        @click="deletePost(post)"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-delete-forever"></v-icon>
        </template>
        Delete</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost(post) {
      this.$emit("delete-post", post);
    },
  },
};
</script>

<style scoped>
</style>