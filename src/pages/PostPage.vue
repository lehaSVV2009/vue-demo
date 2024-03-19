<template>
  <div v-if="isLoadingPost">Loading...</div>
  <post-list-item
    v-else-if="post"
    :post="post"
    :withButtons="false"
  ></post-list-item>
  <div v-else>Post not found</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PostListItem from "../PostListItem.vue";

export default {
  components: {
    PostListItem,
  },
  computed: {
    ...mapState({
      isLoadingPost: (state) => state.postItem.isLoadingPost,
      post: (state) => state.postItem.post,
    }),
  },
  mounted() {
    this.fetchPost(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchPost: "postItem/fetchPost",
    }),
  },
};
</script>

<style>
</style>