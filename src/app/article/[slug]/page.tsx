"use client";
import { ArticleData, IArticle } from "@/components/article/data";
import React, { useEffect, useState } from "react";
// import Markdown from 'react-markdown'
// const markdown = `# Web3 HackFest 2025`
import { use } from "react"; // Import use hook

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  // const router = useRouter();
  // const { id } = router.query; // Extract the dynamic 'id' parameter from the URL

  // State to hold the article data
  const [article, setArticle] = useState<IArticle | null>(null);

  // Unwrap the params using React.use()
  const { slug } = use(params); // Unwrap the params to get the slug
  useEffect(() => {
    console.log(article);
  }, [article]);
  useEffect(() => {
    if (slug) {
      // Fetch the article with the matching slug
      const articleData = ArticleData.find((article) => article.Id === slug);
      setArticle(articleData || null); // Set the article or null if not found
    }
  }, [slug]); // Depend on slug to refetch when it changes
  if (!article) {
    return <div>Loading...</div>; // Show loading message while fetching the article
  }
  return (
    <div className="bg-black flex flex-col justify-center items-center relative"
    style={{
                background: "linear-gradient(to bottom,#001B54,black )",

    }}>
      <div className="w-[80%]  flex flex-col gap-[60px] z-10">
        <div className="flex flex-col gap-5 mt-14 w-full">
          <p className="text-white text-[45px] text-center">{article.title}</p>
          <p className="text-center text-gray-400">{article.category}</p>
          <p className="text-center text-gray-400">{article.date}</p>
        </div>
        <div className="w-full ">
          <div className=" text-white text-[25px] w-[80%] text-center m-auto">
            {article.subtitle}
          </div>
        </div>
        <img
          src={article.thumbnail}
          className="rounded-md h-[674px] w-full z-1"
          alt=""
        />

        <div className="text-white">
          {article.content}
          <div></div>
        </div>
      </div>
      {/* <div className="  absolute top-[100px] left-0  bg-blue-600 opacity-50 blur-3xl w-full  h-[450px] z-[0] "></div> */}
    </div>
  );
};

export default page;
