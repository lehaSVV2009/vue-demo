import { createStore } from "vuex";

import { auth } from "./auth";
import { posts } from "./posts";
import { postItem } from "./postItem";

const store = createStore({
  modules: {
    auth,
    posts,
    postItem
  }
});

export default store;