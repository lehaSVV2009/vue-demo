<template>
  <form class="post-form" v-on:submit.prevent>
    <v-text-field class="post-input" v-model="title" placeholder="Title" />
    <v-text-field
      class="post-input"
      v-model="description"
      type="textarea"
      placeholder="Description"
    />
    <v-btn
      class="post-form-submit-button"
      color="teal-accent-4"
      @click="createPost"
    >
      Create
    </v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    createPost() {
      this.$emit("create-post", {
        title: this.title,
        description: this.description,
      });
      this.title = "";
      this.description = "";
    },
  },
};
</script>

<style scoped>
.post-form {
  display: flex;
  flex-direction: column;
}

.post-form-submit-button {
  align-self: flex-end;
}

.button {
  padding: 5px 10px;
  background: none;
  color: teal;
  border: 1px solid black;
}
</style>