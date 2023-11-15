import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8800" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/blogs");
export const createPost = (newPost) => API.post("./blogs", newPost);
export const updatePost = (id, updatedPost) => API.put(`/blogs/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/blogs/${id}`);
export const fetchPostById = (id) => API.get(`/blogs/${id}`);
export const likePost = (id) => API.patch(`/blogs/${id}/likePost`);
export const comment = (value,id) => API.post(`/blogs/${id}/commentPost`,{value});
export const signIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const toggleBookmark = (blog) => API.post("/bookmark/toggle", { blog });
export const fetchBookmarks = () => API.get("/bookmark");