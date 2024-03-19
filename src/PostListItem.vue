<template>
  <v-card>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-text>{{ post.description }}</v-card-text>
    <v-card-actions v-if="withButtons">
      <v-btn color="teal-accent-4" variant="text" @click="openPost(post)">
        Open</v-btn
      >
      <v-btn color="teal-accent-4" variant="text" @click="deletePost(post)">
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
    withButtons: {
      type: Boolean,
    },
  },
  methods: {
    deletePost(post) {
      this.$emit("delete-post", post);
    },
    openPost(post) {
      this.$emit("open-post", post);
    }
  },
};
</script>

<style scoped>
</style>