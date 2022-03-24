import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const loginUser = (login: string) => instance.post(`/login`, { login });
const getUser = (token: string | null) =>
  instance.get(`/profile`, { headers: { Authorization: `Bearer ${token}` } });
export { loginUser, getUser };
