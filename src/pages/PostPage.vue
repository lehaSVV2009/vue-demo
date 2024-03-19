<template>
  <div v-if="isLoadingPost">Loading...</div>
  <post-list-item
    v-else-if="!!selectedPost($route.params.id)"
    :post="selectedPost($route.params.id)"
    :withButtons="false"
  ></post-list-item>
  <div v-else>Post not found</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import PostListItem from "../PostListItem.vue";

export default {
  components: {
    PostListItem,
  },
  computed: {
    ...mapState({
      isLoadingPost: (state) => state.posts.isLoadingPost,
    }),
    ...mapGetters({
      selectedPost: "posts/selectedPost",
    }),
  },
  mounted() {
    this.fetchAllPosts();
  },
  methods: {
    ...mapActions({
      fetchAllPosts: "posts/fetchAllPosts",
    }),
  },
};
</script>

<style>
</style>