<template>
  <v-btn @click="showCreatePostDialog = true">Create post</v-btn>
  <v-dialog v-model="showCreatePostDialog">
    <v-card class="create-post-card" title="Create post">
      <post-form @create-post="createPost" />
    </v-card>
  </v-dialog>
  <div v-if="loadingPost">Loading...</div>
  <post-list
    v-else
    :posts="posts"
    :current-page="currentPage"
    :totalPages="totalPages"
    @delete-post="deletePost"
    @change-current-page="changeCurrentPage"
  />
</template>

<script>
import { fetchPosts } from "./posts-client";

import PostForm from "./PostForm.vue";
import PostList from "./PostList.vue";

export default {
  name: "App",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      limit: 10,
      totalPages: 0,
      loadingPost: false,
      showCreatePostDialog: false,
    };
  },
  async mounted() {
    await this.fetchPagePosts();
  },
  methods: {
    createPost(post) {
      if (post.title && post.description) {
        this.posts.push(post);
      }
      this.showCreatePostDialog = false;
    },
    deletePost(postToDelete) {
      this.posts = this.posts.filter((post) => post.id !== postToDelete.id);
    },
    async changeCurrentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
      await this.fetchPagePosts();
    },
    async fetchPagePosts() {
      try {
        this.loadingPost = true;
        const response = await fetchPosts({
          page: this.currentPage,
          limit: this.limit,
        });
        const responsePosts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = responsePosts.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body,
        }));
      } catch (e) {
        console.log(e);
        this.posts = [];
      } finally {
        this.loadingPost = false;
      }
    },
  },
};
</script>

<style>
#app {
  margin: 15px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.create-post-card {
  padding: 20px !important;
}
</style>
