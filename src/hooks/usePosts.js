import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router'

import { fetchPosts } from "@/posts-client";

export default () => {
  const isLoadingPost = ref(false);
  const posts = ref([]);
  const currentPage = ref(0);
  const fetching = async () => {
    try {
      isLoadingPost.value = true;
      const response = await fetchPosts();
      const responsePosts = response.data;
      posts.value = responsePosts.map((post) => ({
        id: post.id,
        title: post.title,
        description: post.body,
      }));
    } catch (e) {
      console.log(e);
      posts.value = [];
    } finally {
      isLoadingPost.value = false;
    }
  };

  onMounted(fetching);

  const router = useRouter();
  const openPost = (postToOpen) => {
    router.push(`/vuex-posts/${postToOpen.id}`);
  };

  const deletePost = (postToDelete) => {
    posts.value = posts.value.filter((post) => post.id !== postToDelete.id);
  };

  const setCurrentPage = (newCurrentPage) => {
    currentPage.value = newCurrentPage;
  };

  return {
    posts,
    isLoadingPost,
    currentPage,
    openPost,
    deletePost,
    setCurrentPage,
  };
};
