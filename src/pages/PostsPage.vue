<template>
  <v-row align="center" no-gutters>
    <v-col class="mr-2" cols="2">
      <v-btn class="mr-2" @click="showCreatePostDialog = true">Create post</v-btn>
    </v-col>
    <v-col>
      <v-text-field
        :model-value="searchText"
        @update:model-value="setSearchText"
        placeholder="Search"
      />
    </v-col>
    <v-col cols="2">
      <v-select
        class="ml-2"
        label="Sort"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :items="sortOptions"
      />
    </v-col>
  </v-row>

  <v-dialog v-model="showCreatePostDialog">
    <v-card class="create-post-card" title="Create post">
      <post-form @create-post="createPost" />
    </v-card>
  </v-dialog>
  <div v-if="isLoadingPost">Loading...</div>
  <post-list
    v-else
    :posts="filteredAndSortedAndPagedPosts"
    :current-page="currentPage"
    :total-pages="totalPages"
    @delete-post="deletePost"
    @open-post="openPost"
    @change-current-page="setCurrentPage"
  />
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";

export default {
  name: "App",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      sortOptions: [
        { title: "", value: "" },
        { title: "Title", value: "title" },
        { title: "Description", value: "description" },
      ],
      showCreatePostDialog: false,
    };
  },
  mounted() {
    this.fetchAllPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      currentPage: (state) => state.posts.currentPage,
      limit: (state) => state.posts.limit,
      searchText: (state) => state.posts.searchText,
      selectedSort: (state) => state.posts.selectedSort,
      isLoadingPost: (state) => state.posts.isLoadingPost,
    }),
    ...mapGetters({
      totalPages: "posts/totalPages",
      filteredAndSortedAndPagedPosts: "posts/filteredAndSortedAndPagedPosts",
    }),
  },
  methods: {
    ...mapMutations({
      setCurrentPage: "posts/setCurrentPage",
      setPosts: "posts/setPosts",
      setSearchText: "posts/setSearchText",
      setSelectedSort: "posts/setSelectedSort",
    }),
    ...mapActions({
      fetchAllPosts: "posts/fetchAllPosts",
      createPost: "posts/createPost",
      deletePost: "posts/deletePost",
    }),
    createPost(post) {
      if (post.title && post.description) {
        this.setPosts([post, ...this.posts]);
      }
      this.showCreatePostDialog = false;
    },
    openPost(postToOpen) {
      this.$router.push(`/vuex-posts/${postToOpen.id}`);
    },
  },
};
</script>

<style>
.create-post-card {
  padding: 20px !important;
}
</style>
