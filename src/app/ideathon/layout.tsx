"use client";

import Button from "@/components/Button";
import Galaxy from "@/components/Galaxy";
import LoadOnScreen from "@/components/LoadOnScreen";
import RotateICon from "@/components/RotateIcon";
import Slide from "@/components/Slide";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

export const rewardsInfo = [
  `Giải thưởng hiện kim: 100,000,000 VNĐ`,
  `Học bổng từ các đơn vị tài trợ`,
  `Quà tặng từ Ban Tổ Chức`,
  `Credit cho các API và dịch vụ phát triển`,
  `Cơ hội tham gia "Incubation Program"`,
  `Giấy xác nhận tham gia cuộc thi cho tất cả các thí sinh`,
  `Tham gia miễn phí các buổi đào tạo chuyên sâu với Mentor`,
];

const rewards = {
  first: {
    title: "1 GIẢI NHẤT",
    rewardType: "Hiện kim",
    amount: "25 Triệu VNĐ",
    more: "Và các phần thưởng hiện vật/ dịch vụ đặc biệt khác",
  },
  second: [
    {
      title: "1 GIẢI NHÌ",
      rewardType: "Hiện kim",
      amount: "15 Triệu VNĐ",
      more: "Và các phần thưởng hiện vật/ dịch vụ đặc biệt khác",
    },
    {
      title: "1 GIẢI BA",
      rewardType: "Hiện kim",
      amount: "10 Triệu VNĐ",
      more: "Và các phần thưởng hiện vật/ dịch vụ đặc biệt khác",
    },
  ],
  thir: [
    {
      title: "3 GIẢI PHỤ",
      rewardType: "Hiện kim (Mỗi giải trị giá)",
      amount: "5 Triệu VNĐ",
    },
    {
      title: "30 GIẢI CHO TOP 30 ĐỘI LỌT VÀO VÒNG II",
      rewardType: "Hiện kim (Mỗi giải trị giá)",
      amount: "1 Triệu VNĐ",
    },
    {
      title: "5 GIẢI DO KHÁN GIẢ BÌNH CHỌN",
      rewardType: "Hiện kim (Mỗi giải trị giá)",
      amount: "1 Triệu VNĐ",
    },
  ],
};

const contest = [
  { title: "AI", icon: "assets/images/icons/start.png", enable: false },
  {
    title: "Blockchain/Web3",
    icon: "assets/images/icons/timeLine.png",
    enable: true,
  },
  {
    title: "Blockchain/Web3 x AI",
    icon: "assets/images/icons/chain.png",
    enable: false,
  },
];

const potentials = [
  `Tài chính phi tập trung - DeFi (Giao dịch phi tập trung, Bảo hiểm Blockchain, Quản lý tài sản thực RWA,...)`,
  `NFT & Metaverse (Trải nghiệm thực tế ảo, tài sản số NFT,...)`,
  `Một số ứng dụng Blockchain cho Doanh nghiệp (Chuỗi cung ứng, logistics, Truy xuất nguồn gốc, Hợp đồng thông minh, giao dịch tài chính...)`,
  `Mạng xã hội phi tập trung SocialFi`,
  `Cơ sở hạ tầng vật lý phi tập trung (DePIN) & IoT`,
  `Quản trị, từ thiện và dịch vụ công phi tập trung`,
  `GameFi`,
  `...`,
];

const evaluations = [
  `1/ Tính đổi mới và sáng tạo`,
  ` 2/ Tác động và tiềm năng trên thực tế`,
  `3/ Tính khả thi về mặt kỹ thuật`,
  `4/ Sự phù hợp giữa vấn đề và giải pháp`,
  `5/ Trường hợp sử dụng phù hợp của công nghệ AI và Web3`,
];

function Ideathon() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('assets/images/ideathonBkg.png')`,
        }}
        className="frist-slide bg-cover bg-center bg-no-repeat    w-full  relative "
      >
        <div className="absolute w-full h-full flex translate-y-[-12%] justify-center items-center">
          <Galaxy />
        </div>
        <div
          style={{
            background:
              "linear-gradient(.0033461643641459204deg, rgba(7, 7, 8, 0) 22.842975788288296%, rgba(7, 7, 8, 1) 100%);",
          }}
          className=""
        >
          <div className="py-10 gap-5 frist-slide  flex flex-col items-center justify-center w-full ">
            <div className="custom-bg-image absolute w-full">
              {/* background circle  */}
              <div className="w-full flex justify-center ">
                <div
                  className=" flex items-center justify-center  w-[1310px] h-[480px]  bg-[#18559c]  opacity-[0.6] blur-3xl"
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
                src="https://framerusercontent.com/images/fzZxjr0sL5OidKQmPNpmC15o6Y.png"
                alt=""
                style={{ objectPosition: "49% 65.7%", objectFit: "cover" }}
              />
            </div>

            <div className="main-content-wrapper justify-center relative z-30 flex flex-col items-center gap-5 w-[70%]">
              <span className="block overflow-hidden h-[120px] text-[100px] font-[800] text-white">
                <span
                  className={`text-center transition-all  opacity-0 block  ease-in-out ${
                    loaded
                      ? "translate-y-[0] duration-700 opacity-100"
                      : "translate-y-[100px] opacity-0"
                  }`}
                >
                  {/* image */}
                  WEB3 & AI IDEATHON
                </span>
              </span>

              <span className="uppercase text-white text-[24px] font-[600]">
                Cuộc thi toàn quốc về ý tưởng công nghệ AI & Web3
              </span>

              <span className="text-white text-center text-[17px] font-[500]">
                Web3 HackFest 2025 mở màn với cuộc thi về ý tưởng - Web3 & AI
                Ideathon đầy hứng khởi! Bạn và đội của mình sẽ sẽ có cơ hội
                trình bày những ý tưởng sáng tạo về việc ứng dụng AI và Web3 để
                giải quyết các vấn đề thực tiễn, kiến tạo tương lai số.
              </span>

              <div className="flex gap-4">
                <Button hover rounded={false} size="md" click={() => {}}>
                  <div className="flex gap-2">
                    <span className="text-[18px] font-[500] text-white">
                      Đăng ký ngay
                    </span>
                    <MoveRight className="" stroke="#fff" />
                  </div>
                </Button>
                <Button
                  hover
                  reverse
                  rounded={false}
                  size="md"
                  click={() => {}}
                >
                  <div className="flex gap-2">
                    <span className="text-[18px] font-[500] text-white">
                      Thể kệ và hướng dẫn
                    </span>
                    <MoveRight className="" stroke="#fff" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-slide pb-[80px]">
        <div
          style={{ backgroundImage: `url('assets/images/ideathonBkg2.png')` }}
          className="bg-center bg-cover  w-full h-full"
        >
          <div
            style={{
              background: `linear-gradient(.0033461643641459204deg, rgba(7, 7, 8, 0) 22.842975788288296%, rgba(7, 7, 8, 1) 100%);`,
            }}
            className="w-full"
          >
            <div className="min-h-[100vh] w-full flex flex-col items-center">
              <div className="slide-2-heading pt-[80px] w-full flex justify-center gap-[80px] min-h-[300px]">
                <div className="relative   h-full w-[300px]">
                  <img
                    src="https://framerusercontent.com/images/Un8VtCoWWdVwqKgXpSjwy0hj4.svg"
                    alt="dlaksnda"
                    className="absolute right-0 top-[48px] w-[48px] h-[48px]"
                  />
                  <img
                    src="https://framerusercontent.com/images/yRSlun4yNGMrd70oBwWFAiPRe8A.svg"
                    alt=""
                    className="absolute left-[35%] top-[-46px] w-[182px] h-[280px]"
                  />
                </div>
                <div className="relative h-full w-[480px]">
                  <div className="absolute ">
                    <Galaxy />
                  </div>
                  <div className="absolute left-0 top-0 w-full h-[140px] flex items-center justify-center">
                    <RotateICon
                      iconUrl={`https://framerusercontent.com/images/EIbC88bc0wQGkfhwoybcspnmX0.png`}
                    />
                  </div>
                </div>
                <div className="relative   h-full w-[300px]">
                  <img
                    src="https://framerusercontent.com/images/Un8VtCoWWdVwqKgXpSjwy0hj4.svg"
                    alt="dlaksnda"
                    className="absolute left-0 top-[48px] w-[48px] h-[48px]"
                  />
                  <img
                    src="https://framerusercontent.com/images/8RnPXwP8wtecEf8Izwvw8y8d0U.svg"
                    alt=""
                    className="absolute right-[35%] top-[-46px] w-[182px] h-[280px]"
                  />
                </div>
              </div>
              <div className="slide-2-body flex justify-center w-pageContent flex-col items-center gap-4">
                <span className="text-[45px] font-[500] text-white">
                  Giải thưởng
                </span>
                <div className="flex flex-wrap justify-between w-full">
                  {rewardsInfo.map((item, index) => (
                    <li
                      className="w-[48%] text-[18px] font-[500] text-white"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </div>
                <div className="flex gap-4 w-full h-[512px]">
                  <div className="px-8 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] h-full w-[526px] flex flex-col justify-center">
                    <img
                      src="https://framerusercontent.com/images/EIbC88bc0wQGkfhwoybcspnmX0.png"
                      alt=""
                      className="w-[94px] h-[100px] mb-9"
                    />
                    <span className="text-white">1 GIẢI NHẤT</span>
                    <span className="text-white">Hiện kim</span>
                    <span className="text-primary text-[50px] font-[600]">
                      25 Triệu VNĐ
                    </span>
                    <span className="text-white">
                      {" "}
                      Và các phần thưởng hiện vật/ dịch vụ đặc biệt khác
                    </span>
                  </div>
                  <div className="flex flex-col gap-4  w-[400px]">
                    {rewards.second.map((item, index) => (
                      <div
                        key={index}
                        className="w-full h-[48%]  px-8 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] flex flex-col justify-center"
                      >
                        <span className="text-white block">{item.title}</span>
                        <span className="text-white block">
                          {item.rewardType}
                        </span>
                        <span className="text-primary text-[45px] font-[600]">
                          {item.amount}
                        </span>
                        <span className="text-white"> {item.more}</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-[324px] flex flex-col gap-4 justify-between">
                    {rewards.thir.map((item, index) => (
                      <div className="px-8 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] w-full h-[32%] flex flex-col justify-center">
                        <span className="text-white">{item.title}</span>
                        <span className="text-white">{item.rewardType}</span>
                        <span className="text-primary text-[40px] font-[600]">
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          title={`Thông tin cuộc thi`}
        >
          <LoadOnScreen popup={false}>
            <div className="flex gap-4 justify-center">
              <img
                src="https://framerusercontent.com/images/ZpiffHjpTqEjMNZsxhcIAiURFE.jpg"
                alt=""
                className="w-[940px] h-[560px] rounded-[10px] border-[1px] border-[#ffffff26]"
              />
            </div>
          </LoadOnScreen>
          <div className=" flex flex-col items-center gap-3">
            <span className="text-white block text-center">
              Bạn có ý tưởng đột phá về Web3 & AI?{" "}
            </span>
            <span className="text-white max-w-[800px] block text-center font-[500] mb-2">
              Tham gia khóa học MIỄN PHÍ, nhận ngay kiến thức căn bản và cơ hội
              chinh phục giải thưởng 100 triệu đồng tại Web3 & AI Ideathon 2025!
            </span>
            <Button hover rounded={false} size="md" click={() => {}}>
              <div className="flex items-center gap-2">
                <span className="text-white">Học ngay</span>
                <MoveRight size={18} stroke="#fff" />
              </div>
            </Button>
          </div>
        </Slide>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-white text-[45px] font-[600] mb-8">Timeline</span>
        <img
          src="https://framerusercontent.com/images/fmxqAFJ5LpXcXIT1161CZR3KdU0.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      <Slide
        shappe="square"
        full
        opacity="s"
        bkg={true}
        title="Lĩnh vực dự thi"
      >
        <div className="w-pageContent">
          <div className="w-full flex gap-10 justify-between ">
            {contest.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  !item.enable && "opacity-40"
                } cursor-pointer gap-4 w-[30%] justify-center transition-all duration-200 ease-linear hover:transition-all hover:duration-200 hover:ease-linear hover:scale-110 hover:opacity-100`}
              >
                <img src={item.icon} alt="" className="w-9 h-9" />
                <span
                  className={`
                  text-[24px]
                  font-[600]
                  ${item.enable ? "text-white" : "text-[#f1f1f2]"}`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[2px] rounded-[2px] opacity-60 bg-primary mt-9"></div>
        <div className=" w-full border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] h-full  flex  p-[10px]">
          <div className="w-[50%] p-8">
            <span className="text-[24px] font-[600] text-white block">
              Công nghệ chuỗi khối (Blockchain/ Web3)
            </span>
            <span className="text-[16px] text-[#aeb0b6] block">
              Công nghệ lưu trữ phi tập trung và bảo mật, tạo nền tảng cho các
              ứng dụng Web3 và giao dịch minh bạch không cần trung gian.
            </span>
          </div>
          <div className="w-[50%] p-8">
            <span className="text-[20px] font-[600] text-white block mb-4">
              Các lĩnh vực tiềm năng:
            </span>

            <div className="w-full flex flex-col gap-[18px]">
              {potentials.map((item, index) => (
                <div className="flex gap-[10px]">
                  <span className="w-[28px] h-[28px] rounded-[4px] bg-primary text-black text-[18px] font-[500] flex items-center justify-center  ">
                    {index + 1}
                  </span>
                  <span className="text-[18px] max-w-[520px] text-[#e4e4e6]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      <div
        style={{
          backgroundImage: `url('assets/images/ideathonBkg3.png')`,
        }}
        className="flex flex-col gap-4 bg-contain bg-right-bottom bg-no-repeat"
      >
        <Slide
          full
          bkg
          opacity="s"
          shappe="square"
          title="Đăng ký thi và nộp bài"
        >
          <span className="text-white text-[24px]  font-[500]">
            Tiêu chí đánh giá:
          </span>
          <div className="flex gap-6">
            {evaluations.map((item, index) => (
              <div className="w-[19%] px-8 py-6 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] flex flex-col justify-center">
                <span className="text-white text-center font-[600] text-[17px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Ideathon;
