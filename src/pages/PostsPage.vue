<template>
  <v-row align="center" no-gutters>
    <v-col cols="3">
      <v-btn @click="showCreatePostDialog = true">Create post</v-btn>
    </v-col>
    <v-col>
      <v-text-field v-model="searchText" placeholder="Search" />
    </v-col>
    <v-col cols="3">
      <v-select
        class="ml-2"
        label="Sort"
        v-model="selectedSort"
        :items="sortOptions"
      />
    </v-col>
  </v-row>

  <v-dialog v-model="showCreatePostDialog">
    <v-card class="create-post-card" title="Create post">
      <post-form @create-post="createPost" />
    </v-card>
  </v-dialog>
  <div v-if="loadingPost">Loading...</div>
  <post-list
    v-else
    :posts="filteredAndSortedPosts"
    :current-page="currentPage"
    :totalPages="totalPages"
    @delete-post="deletePost"
    @open-post="openPost"
    @change-current-page="changeCurrentPage"
  />
</template>

<script>
import { fetchPosts } from "../posts-client";

import PostForm from "../PostForm.vue";
import PostList from "../PostList.vue";

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
      searchText: "",
      selectedSort: "",
      sortOptions: [
        { title: "", value: "" },
        { title: "Title", value: "title" },
        { title: "Description", value: "description" },
      ],
      loadingPost: false,
      showCreatePostDialog: false,
    };
  },
  async mounted() {
    await this.fetchPagePosts();
  },
  computed: {
    filteredPosts() {
      if (!this.searchText) {
        return this.posts;
      }
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    filteredAndSortedPosts() {
      let posts = this.filteredPosts;
      if (this.selectedSort) {
        posts = [...posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(
            post2[this.selectedSort]
          );
        });
      }
      return posts;
    },
  },
  methods: {
    createPost(post) {
      if (post.title && post.description) {
        this.posts = [post, ...this.posts];
      }
      this.showCreatePostDialog = false;
    },
    deletePost(postToDelete) {
      this.posts = this.posts.filter((post) => post.id !== postToDelete.id);
    },
    openPost(postToOpen) {
      this.$router.push(`/posts/${postToOpen.id}`);
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
.create-post-card {
  padding: 20px !important;
}
</style>
