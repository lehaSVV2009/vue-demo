import axios from "axios";

const fetchPosts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

export { fetchPosts };
