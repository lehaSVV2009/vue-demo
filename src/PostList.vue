<template>
  <div v-if="Array.isArray(posts) && posts.length > 0">
    <transition-group name="posts" tag="div">
      <div class="post" v-for="post in posts" :key="post.id">
        <post-list-item
          :post="post"
          withButtons
          @deletePost="deletePost"
          @openPost="openPost"
        />
      </div>
    </transition-group>
  </div>
  <div v-else>No posts</div>
  <v-pagination
    :model-value="currentPage"
    :length="totalPages"
    @update:model-value="changeCurrentPage"
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
    openPost(post) {
      this.$emit("open-post", post);
    },
    changeCurrentPage(newCurrentPage) {
      this.$emit("change-current-page", newCurrentPage);
    },
  },
};
</script>

<style scoped>
.post {
  margin: 10px 0px;
}

.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s;
}

.posts-enter, .posts-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(130px);
}
</style>