import axios from "axios";

const fetchPosts = async ({ page, limit }) => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

export { fetchPosts };
