"use client";
import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Galaxy from "@/components/Galaxy";
import GlassmophismTag from "@/components/GlassmophismTag";
import LoadOnScreen from "@/components/LoadOnScreen";
import Milestone from "@/components/Milestone";
import Slide from "@/components/Slide";
import W3Field from "@/components/W3Field";
import { MoveRight } from "lucide-react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  useInView,
} from "motion/react";
import { div, image, img } from "motion/react-client";
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

const milestones = [
  {
    src: "https://framerusercontent.com/images/fzZxjr0sL5OidKQmPNpmC15o6Y.png",
    disable: false,
    title: "Genesis",
    period: "10/2024 - 3/2025",

    tags: [
      "Web3 & AI Ideathon",
      "UniTour",
      "Idea Pitching Day Final",
      "FutureCast",
      "Bootcamp & Hackathon",
    ],
  },
  {
    src: "https://framerusercontent.com/images/SXpmvIYqaNdsJR9uU5dEG4cRTY.png",
    disable: true,
    title: "Convergence",
    period: "03/2025 - 05/2025",
    tags: ["Bootcamp & Hackathon", "W3HF’25 Hackathon", "Main Conference"],
  },
  {
    src: "https://framerusercontent.com/images/144qwEqrOKh4wyWxvvWBZnfzQF0.png",
    disable: true,
    title: "Acceleration",
    period: "05/2025 - 07/2025",
    tags: [
      "Workshop & Seminar",
      "Training & Mentoring",
      "Incubation Program",
      "Fundraising",
      "Investments",
    ],
  },
];

const hosts = [
  "https://framerusercontent.com/images/YSfEfbd7RhIpjqvWTl9LxnxzvM.png",
  "https://framerusercontent.com/images/a7BXTlct1rp61eBh3u5NO10XMI.png?scale-down-to=1024",
  "https://framerusercontent.com/images/8r6v2sdjLNlDcTukXUZU4ViPs.png?scale-down-to=1024",
];

const values = [
  { title: "Social Impressions", value: "10M+" },
  {
    title: "Prize Pool",
    value: "110K",
  },
  {
    title: "Attendees",
    value: "3K+",
  },
  {
    title: "Projects",
    value: "150+",
  },
  {
    title: "Bootcamps",
    value: "6",
  },
  {
    title: "Bootcamp Learners",
    value: "3.9K+",
  },
];

const speakers = [
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "https://www.web3hackfest.org/",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
  },
  {
    spName: "Marieke Flament",
    info: "CEO | NEAR Foundation",
    avatar:
      "https://framerusercontent.com/images/ZRux8mp9ntwKlc7b3ISMWlaiXuw.png",
    url: "",
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
              className={`transition-all  opacity-0 block  ease-in-out ${
                loaded
                  ? "translate-y-[0] duration-700 opacity-100"
                  : "translate-y-[100px] opacity-0"
              }`}
            >
              {/* image */}
              W3HF'25
            </span>
          </span>

          <span className="uppercase text-white text-[24px] font-[600]">
            A.I CONVERGENCE {`${loaded}`}
          </span>

          <span className="text-disable text-center text-[17px]">
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
                  <div key={index} className="w-[20%]">
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

      <Slide key={1} title={`Thông tin sự kiện`}>
        {eventInfo.map((item, index) => (
          <div key={index} className="w-[23%]">
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

      <Slide key={2} title={`Web3 HackFest Milestone`}>
        <LoadOnScreen popup={false}>
          <div className="flex gap-4 justify-center">
            {milestones.map((item, index) => (
              <Milestone
                key={index}
                title={item.title}
                period={item.period}
                index={index}
                tags={item.tags}
                src={item.src}
                disable={item.disable}
              />
            ))}
          </div>
        </LoadOnScreen>
      </Slide>

      <Slide key={3} title="Chuỗi hoạt động trong sự kiện">
        <LoadOnScreen popup={false}>
          <div className="flex gap-8 w-full flex-wrap justify-center">
            {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
              <EventCard
                key={index}
                title={`${item}`}
                image="https://framerusercontent.com/images/E8xGx4xwd1WH1UDyOCzHP1itRU.jpg"
              />
            ))}
          </div>
        </LoadOnScreen>
      </Slide>

      <Slide key={5} title="Đơn vị tổ chức">
        <div className="flex gap-8 w-full justify-between flex-wrap items-center ">
          <LoadOnScreen popup={false}>
            <div className="flex w-full justify-between items-center">
              {hosts.map((item, index) => (
                <div key={index} className="w-fit h-[100px]">
                  <img
                    src={item}
                    alt=""
                    sizes=""
                    className="w-auto h-[100px] object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[2px] bg-[#194361] rounded-[2px] mt-10"></div>
          </LoadOnScreen>
        </div>
      </Slide>

      <Slide key={6} title="Web3 HackFest 2023">
        <div className="flex gap-8 w-full justify-between flex-wrap items-center ">
          <div className="flex w-full gap-[38px] justify-center flex-col items-center">
            <span className="text-white text-[36px] font-[500]">
              Những con số ấn tượng
            </span>
            <LoadOnScreen popup={true}>
              <div className="flex items-center justify-between w-full">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="gap-2 flex flex-col justify-center items-center"
                  >
                    <span className="text-disable text-[18px]">
                      {item.title}
                    </span>
                    <span className="text-primary text-[48px] font-[500]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </LoadOnScreen>

            <W3Field
              title="Nhà tài trợ 2023"
              button={{ title: "Become Our Sponsor", click: () => {} }}
            >
              <div className="flex flex-col gap-4 w-[90%] mt">
                {[
                  [1, 2, 1, 1],
                  [1, 2, 1, 1],
                  [1, 1, 2, 1],
                  [1, 1, 1, 1],
                ].map((item, index) => (
                  <div className="flex justify-between w-full" key={index}>
                    {item.map((child_item, child_index) => (
                      <img
                        key={child_index}
                        className="h-[48px] w-auto"
                        src={`${
                          child_item == 1
                            ? "https://framerusercontent.com/images/MREXi78JgugwcKzmAcmRMibsMLw.png"
                            : "https://framerusercontent.com/images/AyCXhQ2U9xiePn7fvSG19x4s.png"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </W3Field>

            <W3Field
              title="Đối tác truyền thông 2023"
              button={{ title: "Become Our Partner", click: () => {} }}
            >
              <div className="flex flex-col gap-4 w-[90%] mt">
                {[
                  [1, 2, 1, 1],
                  [1, 2, 1, 1],
                  [1, 1, 2, 1],
                  [1, 1, 1, 1],
                ].map((item, index) => (
                  <div className="flex justify-between w-full" key={index}>
                    {item.map((child_item, child_index) => (
                      <img
                        key={child_index}
                        className="h-[48px] w-auto"
                        src={`${
                          child_item == 1
                            ? "https://framerusercontent.com/images/MREXi78JgugwcKzmAcmRMibsMLw.png"
                            : "https://framerusercontent.com/images/AyCXhQ2U9xiePn7fvSG19x4s.png"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </W3Field>

            <W3Field
              title="Đối tác truyền thông 2023"
              button={{ title: "Become Our Partner", click: () => {} }}
            >
              {" "}
              <div className="flex gap-4 w-[90%] mt flex-wrap items-center justify-center">
                {[
                  1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
                  2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
                ].map((item, index) => (
                  <div className="px-8 w-fit" key={index}>
                    <img
                      className="h-[48px] w-auto object-cover object-center"
                      src={
                        item == 1
                          ? "https://framerusercontent.com/images/asVCrm0gQCx2fAYWMItUP6JUaU.png"
                          : "https://framerusercontent.com/images/tFXz3HBTwq7RclZ70qUpt28OOE.png"
                      }
                      alt=""
                    />{" "}
                    h-
                  </div>
                ))}
              </div>
            </W3Field>

            <span className="text-white text-[36px] font-[500]">
              Diễn giả nổi bật 2023
            </span>
            <div className="flex gap-[32px] flex-wrap items-center justify-between w-[80%]">
              {speakers.map((item, index) => (
                <div
                  key={index}
                  className="w-[230px] h-[280px] rounded-[10px] overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 bg-[#0000003e] p-2 w-full h-full flex items-end justify-start">
                    <div className="">
                      <span
                        onClick={() => {
                          if (item.url) {
                            window.open(item.url, "_blank");
                          }
                        }}
                        className={`text-[18px] block text-white font-[500] ${
                          item.url && "cursor-pointer"
                        }`}
                      >
                        {item.spName}
                      </span>
                      <span className="text-[#AEB0B6] text-[13px]">
                        {item.info}
                      </span>{" "}
                    </div>
                  </div>
                  <img
                    className="w-full h-full object-cover object-center"
                    src={item.avatar}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>
      <Slide title="">
        <div className="px-[64px] py-10 flex justify-center gap-4">
          <div className="  flex flex-col gap-[10px]">
            <span className="w-[480px] text-[24px] block text-white mb-[10px] font-[600]">
              Web3 HackFest 2023 – Unlimited Hacker
            </span>
            <span className="w-[480px] block text-disable">
              Sự kiện <span className="font-[600]">Web3 HackFest </span> là một
              lễ hội hackathon lớn được tổ chức nhằm tạo ra một không gian đầy
              thử thách và cơ hội cho tất cả builder, developer Web2 & Web3. Với
              chủ đề “UNLIMITED HACKER”, sự kiện mong muốn khơi dậy sự sáng tạo
              của Developer và khám phá tiềm năng vô hạn của công nghệ
              Blockchain.
            </span>
            <Button
              reverse={true}
              hover={true}
              rounded={false}
              size="sm"
              click={() => {}}
            >
              <div className="flex gap-2">
                <span className=" text-white">Xem thêm</span>
                <MoveRight className="" stroke="#fff" />
              </div>
            </Button>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <img
              src="https://framerusercontent.com/images/MyPlfaKfPCyINq4DHHVgoU5PU.webp?scale-down-to=1024"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
            <img
              src="https://framerusercontent.com/images/MyPlfaKfPCyINq4DHHVgoU5PU.webp?scale-down-to=1024"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
            <img
              src="https://framerusercontent.com/images/MyPlfaKfPCyINq4DHHVgoU5PU.webp?scale-down-to=1024"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
            <img
              src="https://framerusercontent.com/images/MyPlfaKfPCyINq4DHHVgoU5PU.webp?scale-down-to=1024"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
          </div>
        </div>
      </Slide>
    </>
  );
}
