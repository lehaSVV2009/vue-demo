<template>
  <div v-if="Array.isArray(posts) && posts.length > 0">
    <div class="post" v-for="post in posts" :key="post.id">
      <post-list-item :post="post" @deletePost="deletePost" />
    </div>
  </div>
  <div v-else>No posts</div>
  <v-pagination
    :modelValue="currentPage"
    :length="totalPages"
    @update:modelValue="changeCurrentPage"
    rounded="circle"
  ></v-pagination>
</template>

<script>
import PostListItem from "./PostListItem.vue";

export default {
  components: {
    PostListItem,
  },
  props: {
    posts: { type: Array, required: true },
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
  },
  methods: {
    deletePost(post) {
      this.$emit("delete-post", post);
    },
    changeCurrentPage(newCurrentPage) {
      this.$emit("change-current-page",newCurrentPage)
    }
  },
};
</script>

<style scoped>
.post {
  margin: 10px 0px;
}
</style>