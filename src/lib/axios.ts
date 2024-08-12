import axios from "axios";
import { getCookie } from "cookies-next";

const axiosClient = axios.create({
  baseURL: "https://corelab-api-challenge-pink.vercel.app",
  headers: {
    "Content-Type": "application/json",
    user_id: getCookie("user_id"),
  },
});
export default axiosClient;
