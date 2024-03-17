import { createRouter, createWebHistory } from "vue-router";

import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import PostPage from "@/pages/PostPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;