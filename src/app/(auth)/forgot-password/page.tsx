"use client";
import InputComponent from "@/components/signup/InputComponent";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/axios/axios";
import { toast } from "@/hooks/use-toast";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSendEmail = async () => {
    if (!validateEmail(email)) {
      toast({
        title: "Lỗi",
        description: "Email không hợp lệ",
        variant: "error",
      });
    } else {
      const res = await axiosInstance
        .get(`/user/forgot-password?email=${email}`)
        .then((res) => {
          toast({
            title: "Thành công",
            description: "Email đã được gửi",
            variant: "success",
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert("");
        });

      console.log(res);
    }
  };
  return (
    // <div classNameName="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg p-4 w-[400px] h-[438px]">

    // </div>
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="text-white text-[45px] text-center">
        Nhập mail đặt lại mật khẩu
      </div>
      <div className="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg px-8 py-6 w-[536px]  ">
        <form action="#" method="POST">
          <InputComponent setValue={setEmail} value={email} title="Email" />

          <div
            onClick={handleSendEmail}
            className="mt-4 cursor-pointer w-full bg-[#358FCE] flex justify-center text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            <span>Đặt lại mật khẩu</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
