"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Hàm kiểm tra email hợp lệ
const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra validation trước khi gửi request
    let valid = true;

    // Kiểm tra email
    if (!email) {
      setEmailError("Email không được để trống");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Email không hợp lệ");
      valid = false;
    } else {
      setEmailError(null); // Clear email error
    }

    // Kiểm tra password
    if (!password) {
      setPasswordError("Password không được để trống");
      valid = false;
    } else {
      setPasswordError(null); // Clear password error
    }

    if (!valid) return; // Nếu có lỗi thì không gửi form

    // Gửi request đăng nhập nếu không có lỗi
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirection
      username: email,
      password,
    });

    if (result?.error) {
      console.error("Sign-in failed:", result.error);
    } else {
      console.log("Sign-in successful:", result);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-white text-[45px] text-center">Đăng nhập</div>
      <div className="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg px-8 py-6 w-[536px] text-white">
        <form action="#" method="POST" className="flex flex-col gap-5">
          <div>
          <Label className="text-white">Email</Label>

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
              type="email"

            />
            {emailError && (
              <span className="text-red-500 text-sm">{emailError}</span>
            )}
          </div>
          <div>
          <Label className="text-white">Mật khẩu</Label>

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
            />
            {passwordError && (
              <span className="text-red-500 text-sm">{passwordError}</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#358FCE] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              onClick={handleSubmit}
            >
              Đăng nhập
            </button>

            <button
              type="submit"
              className="w-full bg-[#17171B] text-white py-2 px-4 rounded-md mb-4"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Đăng ký tài khoản
            </button>
            <button
              type="submit"
              className="w-full bg-[#17171B] text-white py-2 px-4 rounded-md mb-4"
              onClick={() => {
                router.push("/forgot-password");
              }}
            >
              Quên mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
