import { useEffect } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import { axiosInstancePrivate } from "@/axios/axios";

// Tạo một Axios instance

// Hook usePrivate để gắn interceptor
export const usePrivate = () => {
  useEffect(() => {
    // Thêm interceptor khi component mount
    const requestInterceptor = axiosInstancePrivate.interceptors.request.use(
      async (config) => {
        try {
          const session = await getSession(); // Lấy session từ NextAuth
          console.log("session")
          console.log(session.access_token)

          if (session?.access_token) {
            const bear = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYxM2QxNzhkMmViZDdkZjVjNTE3OTQiLCJyb2xlIjoidXNlciIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE3MzQ0MjYyNDksImV4cCI6MTczNDQyOTg0OX0.oxtYUVJk6dTvSKiX1eEHLIenUJggtWofEhP9x2Digjo`

            config.headers["Authorization"] = bear;
            console.log(bear)
          }
        } catch (error) {
          console.error("Error attaching token:", error);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Cleanup: xóa interceptor khi component unmount
    return () => {
      axiosInstancePrivate.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return axiosInstancePrivate;
};
