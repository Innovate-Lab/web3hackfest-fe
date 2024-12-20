"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { IArticle } from "../data";
interface Pros{
  article:IArticle
}
const RecentCard = ({article}:Pros) => {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(`/article/${article.Id}`);
  };
  return (
    <div className="flex flex-col gap-6 w-full cursor-pointer" onClick={handleNavigate}>
      <img
        src={article.thumbnail}
        alt=""
        className="rounded-md h-[349px] w-full"
      />
      <div className="flex justify-between text-blue-600 pt-2 border-t border-blue-500 ">
        <span>{article.category}</span>
        <span>{article.date}</span>
      </div>
      <div>
        <div className="text-white text-xl">
          {article.title}
        </div>
        <div className="text-gray-400 text-base">
        {article.subtitle}

        </div>
      </div>
    </div>
  );
};

export default RecentCard;
