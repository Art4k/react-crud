import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5007",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getServerStatus = (serverStatus: number) => {
  if (serverStatus !== 200) {
    throw new Error("Server error: failed to fecth data");
  }
};

// Posts api

const getAllPosts = async () => {
  const { status, data } = await api.get<PostModel[]>("/posts");
  getServerStatus(status);
  return data;
};

const createPost = async (postData: PostModel) => {
  const { data } = await api.post<PostModel>("/posts", { ...postData });
  return data;
};

// Users api

const getSingleUser = async (id: number | string) => {
  const { status, data } = await api.get<UserModel>(`/users/${id}`);
  getServerStatus(status);
  return data;
};

const ApiService = {
  getAllPosts,
  getSingleUser,
  createPost,
};

export default ApiService;
