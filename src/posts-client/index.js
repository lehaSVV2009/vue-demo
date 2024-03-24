import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const fetchPosts = async () => {
  return await client.get("/posts");
};

const fetchPostById = async (id) => {
  return await client.get(`/posts/${id}`);
};

const fetchPostCommentsByPostId = async (id) => {
  return await client.get(`/posts/${id}/comments`);
};

const fetchUsers = async () => {
  return await client.get("/users");
};

const fetchUserById = async (id) => {
  return await client.get(`/users/${id}`);
};

const fetchTodos = async () => {
  return await client.get("/todos");
};

const fetchTodoById = async (id) => {
  return await client.get(`/todos/${id}`);
};

export {
  fetchPostById,
  fetchPosts,
  fetchPostCommentsByPostId,
  fetchUsers,
  fetchUserById,
  fetchTodos,
  fetchTodoById,
};
