"use client";
import Button from "@/components/Button";
import Galaxy from "@/components/Galaxy";
import GlassmophismTag from "@/components/GlassmophismTag";
import LoadOnScreen from "@/components/LoadOnScreen";
import Slide from "@/components/Slide";
import { MoveRight } from "lucide-react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  useInView,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const benifitsTag = [
  {
    icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
    title: `Hỗ trợ và cố vấn từ các chuyên gia`,
  },
  {
    icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
    title: `Tiếp cận tài nguyên học tập và công nghệ trên nền tảng OpenEdu`,
  },
  {
    icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
    title: `Chứng minh năng lực và nâng cao hình ảnh cá nhân`,
  },
  {
    icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
    title: `Cơ hội gọi vốn và khởi nghiệp`,
  },
];

const eventInfo = [
  {
    icon: "https://framerusercontent.com/images/VmOu7F9qD5IHW1bfyGskUnLgoNs.png",
    value: "15M+",
    title: "Social Impressions",
  },
  {
    icon: "https://framerusercontent.com/images/vcv0GImKFcrMNu9u6htWJsdRCqo.png",
    value: "5K+",
    title: "Người tham gia sự kiện",
  },
  {
    icon: "https://framerusercontent.com/images/EIbC88bc0wQGkfhwoybcspnmX0.png",
    value: "$150K",
    title: "Giải thưởng",
  },
  {
    icon: "https://framerusercontent.com/images/HJhVoqWKsV1wvWlTCbl23eMvc.png",
    value: "7K+",
    title: "Người học Bootcamp",
  },
  {
    icon: "https://framerusercontent.com/images/q5NxbTPnVkttI7SQLuPn1kYVybY.png",
    value: "200+",
    title: "Dự án",
  },
  {
    icon: "https://framerusercontent.com/images/Xs3H5IXeWIN6EQJrJOxwlOmIkQ.png",
    value: "50+",
    title: "Quỹ đầu tư Web2 & Web3",
  },
  {
    icon: "https://framerusercontent.com/images/PVU13u9fjRlRTWvpFJFka7vqHI.png",
    value: "100+",
    title: "Đối tác truyền thông",
  },
  {
    icon: "https://framerusercontent.com/images/N5VWOfHQzYhaEA1Mj4wQmuzgWs.png",
    value: "50+",
    title: "KOL Web3 quốc tế",
  },
  {
    icon: "https://framerusercontent.com/images/YlROmHK8orvkSNfrRKDKtSR2xg.png",
    value: "12+",
    title: "Đối tác giáo dục",
  },
  {
    icon: "https://framerusercontent.com/images/Tdck5zybC7diGMFhZMNeOYJweUM.png",
    value: "8",
    title: "Bootcamps",
  },
  {
    icon: "https://framerusercontent.com/images/PjjdLbsDo4iD6Cvpd4lPgaEOxxU.png",
    value: "100+",
    title: "Diễn giả quốc tế",
  },
  {
    icon: "https://framerusercontent.com/images/ZualH6ZXRRtSaEohyAE2nrqdYE.png",
    value: "50+",
    title: "Báo chí đưa tin",
  },
];

export default function Home() {
  const [deg, setDeg] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const value = useMotionValue(0);

  useMotionValueEvent(value, "change", (latest) => {
    console.log(latest);
  });

  // const opacity = useTransform(scrollYProgress, [0, 1], []);

  const refInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    refInterval.current = setInterval(() => {
      setDeg((prev) => prev + 1);
    }, 4000 / 360);
    return () => {
      clearInterval(refInterval.current as NodeJS.Timeout);
    };
  }, []);

  return (
    <>
      <div className="py-10 gap-5 frist-slide  flex flex-col items-center justify-center w-full bg-black">
        <div className="custom-bg-image absolute w-full">
          <div className="gb-resource">
            <img
              className="w-[100vw] h-[200px]"
              srcSet="https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=512 512w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png 3820w"
              alt=""
            />
          </div>
          {/* background circle  */}
          <div className="w-full flex justify-center ">
            <div
              className="  w-[1600px] h-[1400px]  translate-y-[-22%]"
              style={{
                backgroundImage:
                  "radial-gradient(closest-side, #072a53, rgba(0,0,0,0))",
              }}
            ></div>
          </div>
        </div>

        <div className="w-[274px] h-[256px] animate-wave-slow">
          <img
            className=""
            src="https://framerusercontent.com/images/l6DoV80yKM4kCaJFEXrySkz9c2I.png"
            alt=""
            style={{ objectPosition: "49% 65.7%", objectFit: "cover" }}
          />
        </div>

        <div className="main-content-wrapper justify-center relative z-30 flex flex-col items-center gap-5 w-[70%]">
          <span className="block overflow-hidden h-[120px] text-[100px] font-[800] text-white">
            <span
              className={`transition-all translate-y-[100px] opacity-0 block  ease-in-out ${
                loaded ? "translate-y-[0] duration-700 opacity-100" : ""
              }`}
            >
              {/* image */}
              W3HF'25
            </span>
          </span>

          <span className="uppercase text-white text-[24px] font-[600]">
            A.I CONVERGENCE
          </span>

          <span className="text-[#94969d] text-center text-[17px]">
            W3HF’25: Web3 & AI Convergence: Hội nghị AI và Web3 lớn nhất Đông
            Nam Á, nơi quy tụ những nhà đổi mới, nhà sáng lập và người kiến tạo
            để khám phá và vượt qua giới hạn của công nghệ AI, Web3 cùng sự giao
            thoa đột phá giữa chúng.
          </span>

          <Button rounded={false} size="md" click={() => {}}>
            <div className="flex gap-2">
              <span className="text-[18px] font-[500] text-white">
                Đăng ký ngay
              </span>
              <MoveRight className="" stroke="#fff" />
            </div>
          </Button>
        </div>
      </div>

      <div className="second-slide-wrapper pt-[100px] flex flex-col items-center relative z-100 min-h-[110vh]">
        <div className="w-full z-101">
          <div className="front-glass gap-10 w-full flex flex-col relative z-[10] items-center">
            <div
              className="text-[#17171b] w-[84px] h-[84px] flex items-center justify-center  rounded-[15px]"
              style={{
                backgroundImage: `linear-gradient(${deg}deg, #101013, #000)`,
              }}
            >
              <div className="w-[80px] flex items-center justify-center h-[80px] rounded-[15px] bg-black">
                <div className="w-[68px] h-[68px] rounded-[12px] flex items-center justify-center border-[#17171b] border-[2px]">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://framerusercontent.com/images/OzMurPLi1kCizdhiVFLelcVFZf4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <LoadOnScreen popup={false}>
              <span
                className={`text-[48px] font-[600] text-white w-full text-center block`}
              >
                Quyền lợi tham gia
              </span>
            </LoadOnScreen>

            <LoadOnScreen popup={false}>
              <span className="flex gap-4 justify-center px-4">
                {benifitsTag.map((item, index) => (
                  <div className="w-[20%]">
                    <GlassmophismTag size="s" icon={item.icon} key={index}>
                      <span className="text-white mt-2 text-center text-[13px] font-[500]">
                        {item.title}
                      </span>
                    </GlassmophismTag>
                  </div>
                ))}
              </span>
            </LoadOnScreen>
          </div>
        </div>

        <div className="back-galss absolute z-[9] w-full flex flex-col items-center top-[40px]">
          <div className="w-full flex justify-center absolute translate-y-[68px] ">
            <div
              className="  w-[1400px] h-[480px]  translate-y-[-20%]"
              style={{
                backgroundImage:
                  "radial-gradient(closest-side, #072a53, rgba(0,0,0,0))",
              }}
            ></div>
          </div>
          <Galaxy />
        </div>
      </div>

      <Slide title={`Thông tin sự kiện`}>
        {eventInfo.map((item, index) => (
          <div className="w-[23%]">
            <LoadOnScreen popup={false}>
              <GlassmophismTag size="m" icon={item.icon} key={index}>
                <span className="text-[48px] font-[600]">{item.value}</span>
                <span className="text-white mt-2 text-center text-[13px] font-[500]">
                  {item.title}
                </span>
              </GlassmophismTag>
            </LoadOnScreen>
          </div>
        ))}
      </Slide>

      <Slide title={`Các hoạt động trong sự kiện`}>saadd</Slide>
      <div className="h-[100vh] "></div>
    </>
  );
}
