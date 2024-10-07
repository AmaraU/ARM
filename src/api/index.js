import axios from "axios";
import { handleErrors } from "../utils/handleResponse";

// Create an instance of axios
const axiosClient = axios.create({
  baseURL: '/api',
  timeout: 10000, // Set a reasonable timeout for requests
  headers: {
    "Content-Type": "application/json",
    "X-ARM-Api-Key-P": import.meta.env.VITE_API_KEY,
  },
});

// Request interceptor to attach tokens, handle logging, etc.
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage or a cookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access, maybe redirect to login
      handleErrors(error.response?.data.message);
    }
    if (error.response?.status === 500) {
      // Handle server errors
      handleErrors(error.response?.data.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
