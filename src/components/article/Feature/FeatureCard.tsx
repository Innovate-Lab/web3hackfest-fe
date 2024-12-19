"use client";
import React from "react";
import { useRouter } from "next/navigation";

const FeatureCard = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/article/abc");
  };
  return (
    <div
      className="flex flex-col gap-6 w-full cursor-pointer"
      onClick={handleNavigate}
    >
      <img
        src="/article/article.webp"
        alt=""
        className="rounded-md h-[349px] w-full"
      />
      <div className="flex justify-between text-blue-600 pt-2 border-t border-blue-500 ">
        <span>technology</span>
        <span>3 thg 12, 2024</span>
      </div>
      <div>
        <div className="text-white text-2xl">
          Web3 HackFest 2025 - Khám phá tiềm năng công nghệ AI và Web3
        </div>
        <div className="text-gray-400 text-lg">
          Sự bùng nổ của công nghệ AI và Web3 đang mở ra những cơ hội đột phá
          chưa từng có.
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
