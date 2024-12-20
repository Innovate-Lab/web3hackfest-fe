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
import { useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";
import RotateICon from "@/components/RotateIcon";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const rewardsInfo = [
  `Giải thưởng hiện kim: 100,000,000 VNĐ`,
  `Học bổng từ các đơn vị tài trợ`,
  `Quà tặng từ Ban Tổ Chức`,
  `Credit cho các API và dịch vụ phát triển`,
  `Cơ hội tham gia "Incubation Program"`,
  `Giấy xác nhận tham gia cuộc thi cho tất cả các thí sinh`,
  `Tham gia miễn phí các buổi đào tạo chuyên sâu với Mentor`,
];
// const benifitsTag = [
//   {
//     icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
//     title: `Hỗ trợ và cố vấn từ các chuyên gia`,
//   },
//   {
//     icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
//     title: `Tiếp cận tài nguyên học tập và công nghệ trên nền tảng OpenEdu`,
//   },
//   {
//     icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
//     title: `Chứng minh năng lực và nâng cao hình ảnh cá nhân`,
//   },
//   {
//     icon: "https://framerusercontent.com/images/qmQExoaRiIDblDbazRJ2OZI8U.png",
//     title: `Cơ hội gọi vốn và khởi nghiệp`,
//   },
// ];

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
    src: "assets/images/genesis.png",
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
    src: "assets/images/W4.png",
    disable: true,
    title: "Convergence",
    period: "03/2025 - 05/2025",
    tags: ["Bootcamp & Hackathon", "W3HF’25 Hackathon", "Main Conference"],
  },
  {
    src: "assets/images/W3.png",
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
  {
    size: "128",
    mobildSize: "",
    image:
      "https://framerusercontent.com/images/YSfEfbd7RhIpjqvWTl9LxnxzvM.png",
  },
  {
    size: "100",
    image:
      "https://framerusercontent.com/images/a7BXTlct1rp61eBh3u5NO10XMI.png?scale-down-to=1024",
  },
  {
    size: "100",
    image:
      "https://framerusercontent.com/images/8r6v2sdjLNlDcTukXUZU4ViPs.png?scale-down-to=1024",
  },
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
    sName: "Marieke Flament",
    url: "",
    info: "CEO | NEAR Foundation",
    avatar:
      "assets/images/persons/Marieke+Flament+-+Mettle+CEO+-+headshot+(2)+(2).png",
  },
  {
    sName: "Illia Polosukhin",
    url: "",
    info: "Co-Founder | Pagoda",
    avatar:
      "assets/images/persons/66544d142db45766c825342d_Near_Illia Polosukhin.jpg",
  },
  {
    sName: "Dr. Nguyen Minh Hong",
    url: "",
    info: "President | Vietnam Digital Communication Association",
    avatar: "assets/images/persons/chu-tich-nguyen-minh-hong-3393.jpg",
  },
  {
    sName: "Vu Anh Tu",
    url: "",
    info: "CTO | FPT Corporation",
    avatar:
      "assets/images/persons/giam-doc-cong-nghe-fpt-chia-se-chuyen-nghe_60f6584385ef5.jpeg",
  },
  {
    sName: "Rich Robinson",
    url: "",
    info: "Entrepreneur-In-Residence | Animoca Brands",
    avatar:
      "assets/images/persons/63ffbf66765588730e713aee_2eee9e55-4713-453e-8b36-df93bb04525e.png",
  },
  {
    sName: "Nikhil Velpanur",
    url: "",
    info: "Head of Web3 & JIC | AWS",
    avatar: "assets/images/persons/Nikhil-Velpanur.jpg",
  },
  {
    sName: "Don Phan",
    url: "",
    info: "Web3 Specialist | Google Cloud",
    avatar: "assets/images/persons/donphan.png",
  },
  {
    sName: "Ben Morris",
    url: "",
    info: "Director - Head of Ecosystem, APAC | Circle",
    avatar: "assets/images/persons/pR9AA_sB_400x400.jpg",
  },
  {
    sName: "Mary Beth Buchanan",
    url: "",
    info: "Board of Directors Member | Cardano Foundation",
    avatar:
      "assets/images/persons/I53hkp6bxlpFhtLg2l9dTD13u8UYTCSr6CpqTkks (1).jpg",
  },
  {
    sName: "Hanna Tantoco",
    url: "",
    info: "Marketing Director, APAC | Blockdaemon",
    avatar: "assets/images/persons/Hanna-Tantoco.png",
  },
  {
    sName: "Ken Miyachi",
    url: "",
    info: "Tech Lead & PM | NEAR Foundation",
    avatar: "assets/images/persons/Ken-Miyachi.jpg",
  },
  {
    sName: "David Norris",
    url: "",
    info: "Head of Finance | NEAR Foundation",
    avatar: "assets/images/persons/David-Norris.jpg",
  },
  {
    sName: "Mikael Björn",
    url: "",
    info: "Founder | FYEO",
    avatar: "assets/images/persons/1516216360719.jpeg",
  },
  {
    sName: "Dr. Nguyen Huu Cuong",
    url: "",
    info: "Chief Strategy Officer | Vin AI",
    avatar: "assets/images/persons/1651300574711.jpeg",
  },
  {
    sName: "Edward Chen",
    url: "",
    info: "GM of Assets & Commercial Center | Huobi",
    avatar: "assets/images/persons/1622081096624.jpeg",
  },
  {
    sName: "Tony Tong",
    url: "",
    info: "Co-Founder & Co-Chairman | Hong Kong Blockchain Association",
    avatar: "assets/images/persons/tonytong2022-06-23-下午6.12.38.png",
  },
  {
    sName: "Alex Chiocchi",
    url: "",
    info: "CPO | Pagoda",
    avatar: "assets/images/persons/Alex-Chiocchi-1.jpg",
  },
  {
    sName: "Kim Bazak",
    url: "",
    info: "VP of Business Development | MarketAcross",
    avatar: "assets/images/persons/Kim-Bazak.jpg",
  },
  {
    sName: "Dr. Tran Quy",
    url: "",
    info: "President | Vietnam Institute of Digital Economy",
    avatar:
      "assets/images/persons/TS-TRan-Quy-Vien-Truong-Vien-kinh-te-so-Viet-Nam-2.jpg",
  },
  {
    sName: "Dr. Hung Dang",
    url: "",
    info: "Research Director | FPT Blockchain Lab",
    avatar:
      "assets/images/persons/Dang-Khanh-Hung-Giam-Doc-Nghien-Cuu-FPT-Blockchain-Lab-1.png",
  },
];

const activities = [
  { title: "Web3 & AI Ideathon", image: "assets/images/persons/trienlam5.jpg" },
  {
    title: "University Tour",
    image: "assets/images/persons/anh-bia-ueh-tour.jpg",
  },
  {
    title: "FutureCast",
    image: "assets/images/persons/futurecast.jpg",
  },
  {
    title: "Idea Pitching Day Final",
    image:
      "assets/images/persons/464635012_450678248041484_4267471032560000548_n.jpg",
  },
  {
    title: "Bootcamp & Hackathon",
    image: "assets/images/persons/openart-image_bFkm1I8W_1726731594869_raw.jpg",
  },
  {
    title: `W3HF'25 Hackathon`,
    image:
      "assets/images/persons/460abf_c307cbbdadfa468ba26b25343ab9f76f~mv2.webp",
  },
  {
    title: "Main Conference",
    image: "assets/images/persons/istanbul-conference-venue.jpg",
  },
  {
    title: "Workshop & Seminar",
    image:
      "assets/images/persons/448128262_442758148691622_5238382064676312790_n.jpg",
  },
  {
    title: "Training & Mentoring",
    image:
      "assets/images/persons/how-do-you-introduce-mentoring-in-the-workplace-part-one-the-setup-peter-shaw.webp",
  },
  {
    title: "Incubation Program",
    image: "assets/images/persons/968697975d001a9f7d59b561a355ae76.jpg",
  },
  { title: " Fundraising", image: "assets/images/persons/risefunding.jpg" },
  {
    title: "Network & Connections",
    image: "assets/images/persons/communicate.jpg",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [logged] = useState<boolean>(true);
  const value = useMotionValue(0);
  const { data: session } = useSession();
  const router = useRouter();
  useMotionValueEvent(value, "change", (latest) => {
    console.log(latest);
  });

  // const opacity = useTransform(scrollYProgress, [0, 1], []);

  // const refInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // useEffect(() => {
  //   refInterval.current = setInterval(() => {
  //     setDeg((prev) => prev + 1);
  //   }, 4000 / 360);
  //   return () => {
  //     clearInterval(refInterval.current as NodeJS.Timeout);
  //   };
  // }, []);

  const handleSubmit = () => {
    if (session) {
      router.push("/genesis");
    } else {
      router.push("/signin");
    }
    //logic to handle on register now click
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('assets/images/bkgs/primaryBkg.png')`,
        }}
        className="frist-slide bg-cover bg-center bg-no-repeat   bg-black w-full before:content-[''] before:top-0 before:left-0 before:absolute relative before:w-[100%]  before:h-[100%] "
      >
        <div
          style={{
            background: `linear-gradient(.0033461643641459204deg,rgba(7,7,8,0) 22.842975788288296%,rgba(7,7,8,1) 100%)`,
          }}
          className="w-full py-10 flex justify-center"
        >
          <div className="first-slide-body w-pageContent gap-5  flex flex-col items-center justify-center ">
            <div className="custom-bg-image absolute w-full">
              <div className="gb-resource">
                {/* <img
                  className="w-[100vw] h-[200px]"
                  alt=""
                  src
                /> */}
              </div>
              {/* background circle  */}
              <div className="w-full flex justify-center ">
                <div className="  w-[1200px] h-[1000px]  translate-y-[-36%] bg-[#18559c] rounded-[50%] opacity-[0.8] blur-3xl"></div>
              </div>
            </div>

            <div className="w-[232px] h-[232px] sm:w-[274px] sm:h-[256px] animate-wave-slow">
              <img
                className=""
                src="https://framerusercontent.com/images/l6DoV80yKM4kCaJFEXrySkz9c2I.png"
                alt=""
                style={{ objectPosition: "49% 65.7%", objectFit: "cover" }}
              />
            </div>

            <div className="main-content-wrapper justify-center relative z-30 flex flex-col items-center gap-5">
              <span className="block overflow-hidden  text-[32px] sm:text-[68px] font-[800] text-white">
                <span
                  className={`transition-all [font-family:var(--font-batman)] opacity-0 block ease-in-out text-center ${
                    loaded
                      ? "translate-y-[0] duration-700 opacity-100"
                      : "translate-y-[100px] opacity-0"
                  }`}
                >
                  {/* image */}
                  WEB3 HACKFEST 2025
                </span>
              </span>

              <span className="uppercase text-white text-[24px] font-[600] text-center">
                A.I CONVERGENCE
              </span>

              <span className="block  w-[70%] font-[500] text-white min-h-[60px]  text-center text-[17px]">
                The largest Web3 Dev & Tech Conference in Southeast Asia
              </span>

              <Button rounded={false} size="md" click={handleSubmit}>
                <div className="flex gap-2">
                  <span className="text-[18px] font-[500] text-white">
                    {session ? "Nộp bài ngay" : "Đăng kí ngay"}
                  </span>
                  <MoveRight className="" stroke="#fff" />
                </div>
              </Button>
            </div>
            <div className="w-[80%] h-[2px] rounded-[2px] bg-[#358fce] mt-[42px] opacity-30"></div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('assets/images/bkg2.png')`,
        }}
        className="second-slide-wrapper backdrop-blur-sm   bg-no-repeat bg-right bg-auto"
      >
        <div
          //bg shadow
          style={{
            background: `linear-gradient(.0033461643641459204deg,rgba(7,7,8,0) 22.842975788288296%,rgba(7,7,8,1) 100%)`,
          }}
          className="second-slide-wrapper pt-[100px] flex flex-col items-center relative z-100 min-h-[110vh]"
        >
          <div className="flex flex-col items-center relative z-100 min-h-[110vh] w-pageContent">
            <div className="w-full z-101">
              <div className="front-glass  gap-10 w-full flex flex-col relative z-[10] items-center">
                <RotateICon
                  iconUrl={`https://framerusercontent.com/images/hNUuy7LHpIZgQwBQjTGaJLk3VWU.png`}
                />
                {/* <div
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
                </div> */}
                <LoadOnScreen popup={false}>
                  <span
                    className={`text-title font-[600] text-white w-full text-center block`}
                  >
                    Web3 & AI Ideathon
                  </span>
                  <span
                    className={`font-[600] text-white  text-[20px] w-full text-center block mt-4 `}
                  >
                    Cuộc thi toàn quốc về ý tưởng công nghệ Web3 & AI Ideathon
                  </span>
                </LoadOnScreen>

                <LoadOnScreen popup={false}>
                  <div className="w-full  px-4 sm:px-10">
                    <span className="text-[18px] text-[e4e4e6] block sm:w-[64%] w-full sm:text-left text-center font-[400] mb-10">
                      <span className="font-[500]">WEB3 & AI IDEATHON -</span>
                      <span className="font-[400]">
                        được tổ chức trong khuôn khổ giai đoạn đầu tiên
                        (Genesis) của chuỗi sự kiện Web3 HackFest 2025. Là sân
                        chơi sáng tạo toàn quốc nơi các đội thi trình bày ý
                        tưởng về việc ứng dụng AI và Web3 vào thực tiễn, từ phát
                        triển các sản phẩm và ứng dụng góp phần thúc đẩy hệ sinh
                        thái chuyển đổi số toàn diện.
                      </span>
                    </span>
                    <div className="w-full flex sm:justify-start justify-center items-center sm:flex-row flex-col gap-4">
                      <Button hover rounded={false} size="md" click={() => {}}>
                        <div className="flex gap-2">
                          <span className="text-[18px] font-[500] text-white">
                            {logged ? "Nộp bài ngay" : "Đăng kí ngay"}
                          </span>
                          <MoveRight className="" stroke="#fff" />
                        </div>
                      </Button>
                      <Button
                        hover
                        reverse
                        rounded={false}
                        size="md"
                        click={handleSubmit}
                      >
                        <div className="flex gap-2">
                          <span className="text-[18px] font-[500] text-white">
                            Thể lệ và hướng dẫn
                          </span>
                          <MoveRight className="" stroke="#fff" />
                        </div>
                      </Button>
                    </div>
                    <span className="text-title text-white w-full text-center sm:text-left mt-[62px] block">
                      Giải thưởng
                    </span>
                    <div className="flex w-full sm:w-[80%] justify-between flex-wrap mt-4 flex-col sm:flex-row">
                      {rewardsInfo.map((item, index) => (
                        <li
                          className="text-[18px] font-[400] sm:w-[44%] w-full"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </div>
                  </div>
                </LoadOnScreen>

                {/* <LoadOnScreen popup={false}>
                  <span className="flex gap-4 justify-center px-4 flex-wrap">
                    {benifitsTag.map((item, index) => (
                      <div key={index} className="w-[40%]  sm:w-[20%]">
                        <GlassmophismTag size="s" icon={item.icon} key={index}>
                          <span className="text-white mt-2 text-center text-[13px] font-[500]">
                            {item.title}
                          </span>
                        </GlassmophismTag>
                      </div>
                    ))}
                  </span>
                </LoadOnScreen> */}
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
          <div className="w-full h-[200px] absolute bottom-0 bg-gradient-to-t from-black  to-[#ffffff00]"></div>
        </div>
      </div>

      <Slide
        bkg={true}
        shappe="square"
        key={1}
        title={`Quy mô sự kiện Web3 HackFest`}
        full
        opacity="s"
      >
        {eventInfo.map((item, index) => (
          <div key={index} className="sm:w-[23%] w-[46%]">
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

      <div className="relative overflow-x-hidden">
        <div
          style={{ backgroundImage: `url('assets/images/leftArr.png')` }}
          className="absolute bg-center bg-contain bg-no-repeat h-[418px] w-[237px] left-[-86px]"
        ></div>
        <div
          style={{ backgroundImage: `url('assets/images/leftArr.png')` }}
          className="absolute bg-center bg-contain bg-no-repeat  h-[418px] w-[237px] right-[-86px] rotate-[180deg]"
        ></div>

        <Slide
          full
          shappe="square"
          bkg={true}
          key={2}
          title={`Web3 HackFest Milestone`}
        >
          <LoadOnScreen popup={false}>
            <div className="flex gap-4 justify-center sm:flex-row flex-col">
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
      </div>

      <Slide bkg={true} key={3} title="Chuỗi hoạt động trong sự kiện">
        <LoadOnScreen popup={false}>
          <div className="flex sm:gap-8 gap-4  w-full flex-wrap sm:justify-center justify-between px-4">
            {activities.map((item, index) => (
              <EventCard
                key={index}
                title={`${item.title}`}
                image={item.image}
              />
            ))}
          </div>
        </LoadOnScreen>
      </Slide>

      <Slide bkg={false} key={5} title="Đơn vị tổ chức">
        <div className="flex gap-8 w-full justify-between  flex-wrap items-center ">
          <LoadOnScreen popup={false}>
            <div className="flex w-full justify-between items-center">
              {hosts.map((item, index) => (
                <div
                  key={index}
                  className="w-fit sm:h-[100px] sm:scale-100 px-2"
                >
                  {/* 36 60 - 100 120 */}
                  <img
                    src={item.image}
                    alt=""
                    sizes=""
                    className={`w-auto ${
                      item.size == "128"
                        ? "h-[60px] sm:h-[128px]"
                        : "h-[36px] sm:h-[100px]"
                    }   object-cover object-center`}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-[2px] bg-[#194361] rounded-[2px] mt-10"></div>
          </LoadOnScreen>
        </div>
      </Slide>

      <Slide bkg={false} key={6} title="Web3 HackFest 2023">
        <div className="flex gap-8 w-full justify-between flex-wrap items-center ">
          <div className="flex w-full gap-[38px] justify-center flex-col items-center">
            <span className="text-white text-[36px] font-[500] text-center">
              Những con số ấn tượng
            </span>
            <LoadOnScreen popup={true}>
              <div className="flex items-center justify-between w-full flex-wrap gap-8 px-4">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="gap-2 flex flex-col justify-center items-center sm:w-fit w-[42%]"
                  >
                    <span className="text-disable text-[18px] text-center">
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
                  <div
                    className="flex justify-between w-full flex-wrap"
                    key={index}
                  >
                    {item.map((child_item, child_index) => (
                      <img
                        key={child_index}
                        className="sm:h-[48px] sm:w-auto w-[42%] h-auto"
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
                  <div
                    className="flex justify-between w-full flex-wrap"
                    key={index}
                  >
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
                    />
                  </div>
                ))}
              </div>
            </W3Field>

            <span className="text-white text-[36px] font-[500] block w-full text-center">
              Diễn giả nổi bật 2023
            </span>
            <div className="flex gap-4 sm:gap-[32px] flex-wrap items-center justify-between w-[80%]">
              {speakers.map((item, index) => (
                <div
                  key={index}
                  className="sm:w-[230px] w-[47%] h-[200px] sm:h-[280px] rounded-[10px] overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 p-2 w-full h-full flex items-end justify-start bg-gradient-to-t from-[#000000b3] to-transparent">
                    <div className="">
                      <span
                        onClick={() => {
                          if (item.url) {
                            window.open(item.url, "_blank");
                          }
                        }}
                        className={`text-[14px] sm:text-[18px] block text-white sm:font-[500] ${
                          item.url && "cursor-pointer"
                        }`}
                      >
                        {item.sName}
                      </span>
                      <span className="text-[#AEB0B6] text-[11px] sm:text-[13px]">
                        {item.info}
                      </span>
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
      <Slide bkg={true} full opacity="s" title="" shappe="square">
        <div className="px-[64px] py-10 flex justify-center sm:flex-row flex-col gap-4">
          <div className="  flex flex-col gap-[10px]">
            <span className="sm:w-[480px] w-full text-[24px] block text-white mb-[10px] font-[600]">
              Web3 HackFest 2023 – Unlimited Hacker
            </span>
            <span className="sm:w-[480px] w-full block text-disable">
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
              src="assets/images/persons/4-near-apac-2023-1694597546958888708949.webp"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
            <img
              src="assets/images/persons/img-4423-2876.jpg"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
            <img
              src="assets/images/persons/trienlam5.jpg"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
            <img
              src="assets/images/persons/photo-1-1694579257613794939708.jpg"
              alt=""
              className="w-[325px] h-[192px] rounded-[10px] object-cover object-center"
            />
          </div>
        </div>
      </Slide>
    </>
  );
}
