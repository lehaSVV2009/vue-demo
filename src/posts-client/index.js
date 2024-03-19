import axios from "axios";

const fetchPosts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

const fetchPostById = async (id) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};


export { fetchPostById, fetchPosts };
