import { createStore } from "vuex";

import { auth } from "./auth";
import { posts } from "./posts";

const store = createStore({
  modules: {
    auth,
    posts
  }
});

export default store;