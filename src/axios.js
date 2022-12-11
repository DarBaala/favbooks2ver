import axios from "axios";

const instance = axios.create({
  baseURL: "//localhost:4444",
});

export default instance;
