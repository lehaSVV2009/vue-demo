<template>
  <div v-if="isLoadingPost">Loading...</div>
  <post-list
    v-else
    :posts="posts"
    :current-page="1"
    :total-pages="1"
    @delete-post="deletePost"
    @open-post="openPost"
    @change-current-page="setCurrentPage"
  />
</template>

<script>
import PostList from "../components/PostList.vue";
import usePosts from "../hooks/usePosts";

export default {
  components: {
    PostList,
  },
  setup() {
    const {
      posts,
      isLoadingPost,
      currentPage,
      openPost,
      deletePost,
      setCurrentPage,
    } = usePosts();

    return {
      posts,
      isLoadingPost,
      currentPage,
      openPost,
      deletePost,
      setCurrentPage,
    };
  },
};
</script>