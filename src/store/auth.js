export const auth = {
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {},
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {},
  namespaced: true,
};
