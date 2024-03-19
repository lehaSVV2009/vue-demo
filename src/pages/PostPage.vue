<template>
  <div v-if="isLoadingPost">Loading post...</div>
  <div v-else-if="isLoadingPostComments">Loading comments...</div>
  <template v-else-if="post">
    <h3>Post</h3>
    <post-list-item :post="post" :withButtons="false"></post-list-item>
    <h3 class="mt-4">Comments</h3>
    <post-comment class="mt-2" v-for="comment in comments" :key="comment.id" :comment="comment" />
  </template>
  <div v-else>Post not found</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PostComment from "../components/PostComment.vue";
import PostListItem from "../components/PostListItem.vue";

export default {
  components: {
    PostComment,
    PostListItem,
  },
  computed: {
    ...mapState({
      isLoadingPost: (state) => state.postItem.isLoadingPost,
      isLoadingPostComments: (state) => state.postItem.isLoadingPostComments,
      post: (state) => state.postItem.post,
      comments: (state) => state.postItem.comments,
    }),
  },
  mounted() {
    this.fetchPost(this.$route.params.id);
    this.fetchPostComments(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchPost: "postItem/fetchPost",
      fetchPostComments: "postItem/fetchPostComments",
    }),
  },
};
</script>

<style>
</style>