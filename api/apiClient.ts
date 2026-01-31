import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default apiClient;
