import { fetchPosts } from "../posts-client";

export const posts = {
  state: () => ({
    posts: [],
    currentPage: 1,
    limit: 10,
    searchText: "",
    selectedSort: "",
    isLoadingPost: false,
  }),
  getters: {
    totalPages(state) {
      return Math.ceil(state.posts.length / state.limit);
    },
    filteredPosts(state) {
      if (!state.searchText) {
        return state.posts;
      }
      return state.posts.filter((post) =>
        post.title.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
    filteredAndSortedPosts(state, getters) {
      let posts = getters.filteredPosts;
      if (state.selectedSort) {
        posts = [...posts].sort((post1, post2) => {
          return post1[state.selectedSort]?.localeCompare(
            post2[state.selectedSort]
          );
        });
      }
      return posts;
    },
    filteredAndSortedAndPagedPosts(state, getters) {
      if (getters.filteredAndSortedPosts.length === 0) {
        return getters.filteredAndSortedPosts;
      }
      const currentPageFirstPostIndex = state.limit * (state.currentPage - 1);
      const currentPageLastPostIndex = Math.min(
        getters.filteredAndSortedPosts.length - 1,
        state.limit * state.currentPage - 1
      );
      return getters.filteredAndSortedPosts.filter(
        (post, postIndex) =>
          postIndex >= currentPageFirstPostIndex &&
          postIndex <= currentPageLastPostIndex
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setIsLoadingPost(state, isLoadingPost) {
      state.isLoadingPost = isLoadingPost;
    },
  },
  actions: {
    deletePost({ state, commit }, postToDelete) {
      commit("setPosts", state.posts.filter((post) => post.id !== postToDelete.id))
    },
    async fetchAllPosts({ commit }) {
      try {
        commit("isLoadingPost", true);
        const response = await fetchPosts();
        const responsePosts = response.data;
        const posts = responsePosts.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body,
        }));
        commit("setPosts", posts);
      } catch (e) {
        console.log(e);
        commit("setPosts", []);
      } finally {
        commit("isLoadingPost", false);
      }
    },
  },
  namespaced: true,
};
