import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const getUser = (login: string) =>
  instance.get(`users?login=${login}`).then((response) => response.data[0]);

export { getUser };
