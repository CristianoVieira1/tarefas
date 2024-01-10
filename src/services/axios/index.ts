import axios from "axios";

const API = axios.create({
  baseURL: "",
  timeout: 90000,
});

export default API;
