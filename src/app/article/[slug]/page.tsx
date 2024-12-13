import React from "react";
import Markdown from 'react-markdown'
const markdown = `# Web3 HackFest 2025
`

const page = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center relative">
      <div className="w-[80%]  flex flex-col gap-[60px] z-10">
        <div className="flex flex-col gap-5 mt-14 w-full">
          <p className="text-white text-[45px] text-center">
            Web3 HackFest 2025 - Khám phá tiềm năng công nghệ AI và Web3
          </p>
          <p className="text-center text-gray-400">technology</p>
          <p className="text-center text-gray-400">3 thg 12, 2024</p>
        </div>
        <div className="w-full ">
          <div className=" text-white text-[25px] w-[60%] text-center m-auto">
            Sự bùng nổ của công nghệ AI và Web3 đang mở ra những cơ hội đột phá
            chưa từng có.
          </div>
        </div>
        <img
            src="/article/article.webp"
            className="rounded-md h-[674px] w-full z-1"
            alt=""
          />
        

        <div className="text-white">

        <Markdown>{markdown}</Markdown>
        </div>
      </div>
      <div className=" inset-0  absolute top-[100] left-0  bg-blue-600 opacity-50 blur-3xl w-full  h-[300px] z-[-1]"></div>

    </div>
  );
};

export default page;
