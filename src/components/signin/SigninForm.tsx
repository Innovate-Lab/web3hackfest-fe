"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { useCustomRouter } from "@/hooks/useCustomRouter";

// Helper function to validate email
const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const SigninForm = () => {
  const { pushRouteWithQuery } = useCustomRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (!email) {
      toast({ title: "Email không được để trống", variant: "error" });
      return;
    }
    if (!validateEmail(email)) {
      toast({ title: "Email không hợp lệ", variant: "error" });
      return;
    }
    if (!password) {
      toast({ title: "Password không được để trống", variant: "error" });
      return;
    }

    // Perform sign-in
    const result = await signIn("credentials", {
      redirect: false,
      username: email,
      password,
    });

    if (result?.error) {
      toast({ title: result.error || "Error", variant: "error" });
    } else {
      console.log("Sign-in successful:", result);
    }
  };

  return (
    <div className="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg  px-4 sm:px-8 py-6 w-full sm:w-[536px] text-white">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <Label className="text-white mb-2 block">Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
          />
        </div>
        <div>
          <Label className="text-white mb-2 block">Mật khẩu</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#358FCE] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          Đăng nhập
        </button>
        <button
          type="button"
          className="w-full bg-[#17171B] text-white py-2 px-4 rounded-md mb-4"
          onClick={() => pushRouteWithQuery("/signup")}
        >
          Đăng ký tài khoản
        </button>
        <button
          type="button"
          className="w-full bg-[#17171B] text-white py-2 px-4 rounded-md mb-4"
          onClick={() => pushRouteWithQuery("/forgot-password")}
        >
          Quên mật khẩu
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
