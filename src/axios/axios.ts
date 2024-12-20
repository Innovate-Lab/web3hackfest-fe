import axios from "axios";

// Public Axios instance (không cần Bearer Token)
export const axiosInstance = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Private Axios instance (có Bearer Token)
export const axiosInstancePrivate = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
