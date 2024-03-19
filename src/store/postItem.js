import { fetchPostById } from "../posts-client";

export const postItem = {
  state: () => ({
    isLoadingPost: false,
    post: null,
  }),
  mutations: {
    setIsLoadingPost(state, isLoadingPost) {
      state.isLoadingPost = isLoadingPost;
    },
    setPost(state, post) {
      state.post = post;
    },
  },
  actions: {
    async fetchPost({ commit }, postId) {
      try {
        commit("setIsLoadingPost", true);
        const response = await fetchPostById(postId);
        const { id, title, body } = response.data;
        commit("setPost", { id, title, description: body });
      } catch (e) {
        console.log(e);
        commit("setPost", null);
      } finally {
        commit("setIsLoadingPost", false);
      }
    },
  },
  namespaced: true,
};
