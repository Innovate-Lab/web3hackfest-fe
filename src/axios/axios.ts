import axios from "axios";
import { getSession } from "next-auth/react";

// Public Axios instance (không cần Bearer Token)
export const axiosInstance = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Private Axios instance (có Bearer Token)
export const axiosInstancePrivate = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để thêm Bearer Token vào private instance
axiosInstancePrivate.interceptors.request.use(
  async (config) => {
    try {
      // Lấy session từ NextAuth
      const session = await getSession();

      // Nếu có token, thêm vào header Authorization
      if (session?.access_token) {
        config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYxMWU3YzVlMGI1MGMyYmE2ZDQzNTIiLCJyb2xlIjoidXNlciIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE3MzQ0MTkxNTUsImV4cCI6MTczNDQyMjc1NX0.Yb2KBTpBEXmZY2RNukQ6aFG6xEAqhFE62hktnVpHY8I`;
      }
    } catch (error) {
      console.error("Error fetching session token:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
