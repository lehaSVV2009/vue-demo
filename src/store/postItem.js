import { fetchPostById, fetchPostCommentsByPostId } from "../posts-client";

export const postItem = {
  state: () => ({
    isLoadingPost: false,
    isLoadingPostComments: false,
    post: null,
    comments: [],
  }),
  mutations: {
    setIsLoadingPost(state, isLoadingPost) {
      state.isLoadingPost = isLoadingPost;
    },
    setPost(state, post) {
      state.post = post;
    },
    setIsLoadingPostComments(state, isLoadingPostComments) {
      state.isLoadingPostComments = isLoadingPostComments;
    },
    setPostComments(state, comments) {
      state.comments = comments;
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
    async fetchPostComments({ commit }, postId) {
      try {
        commit("setIsPostCommentsLoading", true);
        const response = await fetchPostCommentsByPostId(postId);
        commit("setPostComments", response.data);
      } catch (e) {
        console.log(e);
        commit("setPostComments", []);
      } finally {
        commit("setIsPostCommentsLoading", false);
      }
    },
  },
  namespaced: true,
};
