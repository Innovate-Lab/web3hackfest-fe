import ArticleForm from "@/components/article/article-form";
import React from "react";
import "react-quill-new/dist/quill.snow.css";

function Page() {
  return (
    <div className="flex flex-col w-full relative min-h-screen justify-center items-center">
      <div className="z-10">
        <ArticleForm />
      </div>
      <div className="  absolute top-[150] left-0  bg-blue-600 opacity-50 blur-3xl w-full  h-[300px] z-[0] "></div>
    </div>
  );
}

export default Page;
