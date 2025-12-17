import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://693ec99e12c964ee6b6e530f.mockapi.io/",
  timeout: "120000",
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosClient;
