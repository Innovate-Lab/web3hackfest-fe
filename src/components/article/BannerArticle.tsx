import React from "react";
import bg from "../../../public/article/article-bg.png";
const BannerArticle = () => {
  return (
    <div className="bg-[#001B54] border-b border-b-[#358FCE]">
      <div
        className="w-full h-[247px] flex justify-center items-center text-white relative z-10"
        style={{
          // background: "linear-gradient(to left, black , #001B54)",
          backgroundImage: "url('/article/article-bg.png')",
          backgroundSize: "cover", // Đảm bảo hình ảnh phủ toàn bộ chiều rộng và chiều cao của div
          backgroundPosition: "center", // Căn giữa hình ảnh
          backgroundRepeat: "no-repeat", // Đảm bảo hình ảnh không lặp lại
          backgroundBlendMode: "overlay", // Sử dụng chế độ pha trộn (overlay) để kết hợp gradient với hình ảnh
          // backgroundColor:"#001B54"
        }}
      >
        {/* <img
        src="/article/ccv.png"
        alt=""
        className="absolute z-[0] right-0 h-auto w-[200px]"
      /> */}
        <div className="px-4">
          <span className="text-[45px] ml-">
            You're at Web3 HackFest Article, our focus is on{" "}
            <span className="text-subText">creation</span> ,{" "}
            <span className="text-subText">collaboration</span> , and{" "}
            <span className="text-subText">commitment</span> .
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerArticle;
