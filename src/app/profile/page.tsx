"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const page = () => {
  const { data: session } = useSession(); // `data` is aliased as `session`
  console.log(session); // Use `session` here
  return (
    <div className="w-full text-[#E4E4E6]">
      <div className="flex flex-col gap-8 justify-center items-center pt-[60px]">
        <div className="text-white text-[45px]">Tài khoản</div>
        <div className="w-[50%] bg-[rgba(78,78,78,0.2)] px-8 py-6 flex rounded-xl">
          <img src="/icon/person.png" alt="" className="w-[244px] h-[244px]" />

          <div className="flex flex-col justify-center gap-4">
            <span>Email: {session?.user?.email || "No email"}</span>
            <span>Họ tên: {session?.user?.username || "No name"}</span>
            <span>Số điện thoại: {session?.user?.phone || "No name"}</span>
            <button
              onClick={() => signOut()}
              className="py-[10px] px-[16px] bg-[#358FCE] rounded-2xl"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
