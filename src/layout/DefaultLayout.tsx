"use client";
import React, { useEffect } from "react";
import Heading from "@/layout/components/Heading";
import { Be_Vietnam_Pro } from "next/font/google";
import Slide from "@/components/Slide";
import clsx from "clsx";
import SidebarIcon from "./SidebarIcon";
const beVietnamPro = Be_Vietnam_Pro({
  display: "swap",
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const head = document.querySelector("head");
    if (!head) throw new Error("Head not found");
    const script = document.createElement("script");
    script.src = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-FEKNF4QRBE"></script>
 
<script>
    window.dataLayer = window.dataLayer || []dd;
 
    function gtag() {
        dataLayer.push(arguments);
    }
 
    gtag("js", new Date());
 
    gtag("config", "G-FEKNF4QRBE");
</script>
 
<script type="text/javascript">
    (function (c, l, a, r, i, t, y) {
        c[a] =
            c[a] ||
            function () {
                (c[a].q = c[a].q || []).push(arguments);
            };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "oxtvwlx5i7");
</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5Z5QQSC');</script>
<!-- End Google Tag Manager -->`;
    script.async = true;
    head.appendChild(script);
  });

  return (
    <div className={clsx(beVietnamPro.className, "bg-black")}>
      <Heading />
      <div className=" bg-black min-h-[100vh] pt-[108px] relative">
        {children}
        <SidebarIcon />
      </div>
      <Slide
        hFull={true}
        bkg={true}
        possition="l"
        shappe="square"
        opacity="s"
        bottomSpace
        title=""
      >
        <div className="w-full px-[120px] pt-[150px] pb-[80px]">
          {" "}
          <div className="flex justify-between w-full ">
            <div className="">
              <img
                src="https://framerusercontent.com/images/EAcggmjePAgnMxUT7Yhc8x7fEBo.png"
                alt=""
                className="sm:w-[230px] sm:h-[52px] h-[42px] w-[195px] mb-4"
              />
              <span className="text-white block sm:text-[16px] text-[14px] mb-10 sm:max-w-[440px] max-w-[80%]">
                Chuỗi sự kiện Công nghệ & Nhà phát triển Web3 lớn nhất Đông Nam
                Á
              </span>
              <div className="flex gap-2">
                <span
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/web3hackfest?locale=vi_VN",
                      "_blank"
                    );
                  }}
                  className="flex items-center justify-center hover:bg-[#1e283d] cursor-pointer w-[48px] h-[48px] rounded-[10px] bg-secondary"
                >
                  <img
                    src="https://framerusercontent.com/images/xhYMiExR4XdCd4s2bnoL0pdXOec.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </span>
                <span
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/web3hackfest?locale=vi_VN",
                      "_blank"
                    );
                  }}
                  className="flex items-center justify-center hover:bg-[#1e283d] cursor-pointer w-[48px] h-[48px] rounded-[10px] bg-secondary"
                >
                  <img
                    src="https://framerusercontent.com/images/xhYMiExR4XdCd4s2bnoL0pdXOec.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </span>
                <span
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/web3hackfest?locale=vi_VN",
                      "_blank"
                    );
                  }}
                  className="flex items-center justify-center hover:bg-[#1e283d] cursor-pointer w-[48px] h-[48px] rounded-[10px] bg-secondary"
                >
                  <img
                    src="https://framerusercontent.com/images/xhYMiExR4XdCd4s2bnoL0pdXOec.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="text-[16px] sm:text-[24px] font-[500] text-white text-center">
                Tham gia group Zalo để được hỗ trợ:
              </span>
              <div className="flex flex-col items-center">
                <span className="sm:text-[17px] text-[14px] text-white max-w-[240px] text-center">
                  Web3 HackFest 2025 - AI Convergence
                </span>
                <img
                  className="w-[108px] h-[108px] rounded-[10px] mt-[10px]"
                  src="https://framerusercontent.com/images/ivG9QnH8AbW8ZuPgUKGch7ckCyw.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <span className="block text-white text-[13px] mt-10">
            @2024 All Rights Reserved
          </span>
        </div>
      </Slide>
    </div>
  );
}

export default DefaultLayout;
