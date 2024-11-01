// axiosInstance.ts

import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api", // Replace with your API's base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers you need here
  },
});

// Optional: Add request and response interceptors
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here
    // For example, add an Authorization header
    const token = localStorage.getItem("token"); // Example token retrieval
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Process the response data if needed
    return response.data;
  },
  (error) => {
    // Handle response errors
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default api;
