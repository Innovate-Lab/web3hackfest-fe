"use client";

import Button from "@/components/Button";
import Galaxy from "@/components/Galaxy";
import LoadOnScreen from "@/components/LoadOnScreen";
import RotateICon from "@/components/RotateIcon";
import Slide from "@/components/Slide";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
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

const contestsInfo = [
  {
    title: "Trí tuệ nhân tạo (AI)",
    description:
      "Công nghệ mô phỏng trí thông minh của con người, cho phép máy tính học hỏi, phân tích và đưa ra quyết định thông minh dựa trên dữ liệu.",
    values: [
      `Trí tuệ nhân tạo AI trong các công cụ hỗ trợ doanh nghiệp chung (Phân tích dữ liệu, chăm sóc khách hàng tự động, ...)`,
      `Lĩnh vực Giáo dục (Học tập cá nhân hoá, trợ lý ảo AI, Chatbot, đánh giá năng lực tự động, ...)`,
      `Lĩnh vực Nông nghiệp (Dự báo thời tiết mùa vụ, phát hiện bệnh, tối ưu hoá quy trình chăm sóc, ...)`,
      `Lĩnh vực thương mại và Dịch vụ: (Dự đoán hành vi và xu hướng mua sắm, tối ưu hóa quản lý kho và chuỗi cung ứng, Chatbot và trợ lý ảo chăm sóc khách hàng, Hệ thống đề xuất sản phẩm thông minh, Phân tích phản hồi khách hàng từ các kênh trực tuyến)`,
      `Giao thông và Logistics: Hệ thống vận tải thông minh, Tối ưu hóa lộ trình giao hàng, Giám sát an toàn giao thông, Quản lý đội xe tự động`,
      `Tài chính và Ngân hàng: Phát hiện gian lận, Đánh giá rủi ro tín dụng, Giao dịch tự động, Tư vấn đầu tư cá nhân hóa, Dự báo thị trường tài chính`,
      "...",
    ],
  },
  {
    title: "Công nghệ chuỗi khối (Blockchain/ Web3)",
    description:
      "Công nghệ lưu trữ phi tập trung và bảo mật, tạo nền tảng cho các ứng dụng Web3 và giao dịch minh bạch không cần trung gian.",
    values: [
      "Tài chính phi tập trung - DeFi (Giao dịch phi tập trung, Bảo hiểm Blockchain, Quản lý tài sản thực RWA,...)",
      "NFT & Metaverse (Trải nghiệm thực tế ảo, tài sản số NFT,...)",
      "Một số ứng dụng Blockchain cho Doanh nghiệp (Chuỗi cung ứng, logistics, Truy xuất nguồn gốc, Hợp đồng thông minh, giao dịch tài chính...)",
      "Mạng xã hội phi tập trung SocialFi",
      "Cơ sở hạ tầng vật lý phi tập trung (DePIN) & IoT",
      "Quản trị, từ thiện và dịch vụ công phi tập trung",
      "GameFi",
      "...",
    ],
  },
  {
    title: "kết hợp",
    description:
      "Công nghệ lưu trữ phi tập trung và bảo mật, tạo nền tảng cho các ứng dụng Web3 và giao dịch minh bạch không cần trung gian.",
    values: [
      `Trí tuệ nhân tạo AI trong các công cụ hỗ trợ doanh nghiệp chung (Phân tích dữ liệu, chăm sóc khách hàng tự động, ...).`,
      `Lĩnh vực Giáo dục (Học tập cá nhân hóa, trợ lý ảo AI, Chatbot, đánh giá năng lực tự động, ...).`,
      `Lĩnh vực Nông nghiệp (Dự báo thời tiết mùa vụ, phát hiện bệnh, tối ưu hóa quy trình chăm sóc, ...).`,
      `Lĩnh vực Thương mại và Dịch vụ (Dự đoán hành vi và xu hướng mua sắm, tối ưu hóa quản lý kho và chuỗi cung ứng, Chatbot và trợ lý ảo chăm sóc khách hàng, Hệ thống đề xuất sản phẩm thông minh, Phân tích phản hồi khách hàng từ các kênh trực tuyến).`,
      `Giao thông và Logistics (Hệ thống vận tải thông minh, Tối ưu hóa lộ trình giao hàng, Giám sát an toàn giao thông, Quản lý đội xe tự động).`,
      `Tài chính và Ngân hàng (Phát hiện gian lận, Đánh giá rủi ro tín dụng, Giao dịch tự động, Tư vấn đầu tư cá nhân hóa, Dự báo thị trường tài chính).`,
      "...",
    ],
  },
];

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
  const [contestIndex, setContextIndex] = useState<number>(1);
  const { status } = useSession();
  const router = useRouter();
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

            <div className="w-[232px] h-[232px] sm:w-[274px] sm:h-[256px] animate-wave-slow">
              <img
                className=""
                src="https://framerusercontent.com/images/fzZxjr0sL5OidKQmPNpmC15o6Y.png"
                alt=""
                style={{ objectPosition: "49% 65.7%", objectFit: "cover" }}
              />
            </div>

            <div className="main-content-wrapper justify-center relative z-30 flex flex-col items-center gap-5 w-[70%]">
              <span className="block overflow-hidden h-[120px] text-[32px] sm:text-[68px] font-[800] text-white">
                <span
                  className={`text-center transition-all [font-family:var(--font-batman)]  opacity-0 block  ease-in-out ${
                    loaded
                      ? "translate-y-[0] duration-700 opacity-100"
                      : "translate-y-[100px] opacity-0"
                  }`}
                >
                  {/* image */}
                  WEB3 & AI IDEATHON
                </span>
              </span>

              <span className="uppercase text-white sm:text-[24px] text-[20px] font-[600] text-center">
                Cuộc thi toàn quốc về ý tưởng công nghệ AI & Web3
              </span>

              <span className="text-white text-center text-[14px] sm:text-[17px] font-[500]">
                Web3 HackFest 2025 mở màn với cuộc thi về ý tưởng - Web3 & AI
                Ideathon đầy hứng khởi! Bạn và đội của mình sẽ sẽ có cơ hội
                trình bày những ý tưởng sáng tạo về việc ứng dụng AI và Web3 để
                giải quyết các vấn đề thực tiễn, kiến tạo tương lai số.
              </span>

              <div className="flex gap-4 sm:flex-row flex-col items-center">
                <Button
                  hover
                  rounded={false}
                  size="md"
                  click={() => {
                    router.push(
                      status == "authenticated" ? "/genesis" : "/signup"
                    );
                  }}
                >
                  <div className="flex gap-2">
                    <span className="text-[18px] font-[500] text-white">
                      {status === "authenticated"
                        ? "Nộp bài ngay"
                        : "Đăng ký ngay"}
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
                <span className="sm:text-[45px] text-[32px] font-[500] text-white">
                  Giải thưởng
                </span>
                <div className="flex flex-wrap justify-between w-full sm:px-0 px-[16px] ">
                  {rewardsInfo.map((item, index) => (
                    <li
                      className="sm:w-[48%] text-[14px] sm:text-[18px] font-[500] text-white"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </div>
                <div className="flex gap-4 w-full sm:h-[512px]  flex-col sm:flex-row px-4 sm:px-0  items-center">
                  <div className="px-8 sm:py-0 py-8 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] h-full w-ful sm:w-[526px] flex flex-col justify-center">
                    <img
                      src="https://framerusercontent.com/images/EIbC88bc0wQGkfhwoybcspnmX0.png"
                      alt=""
                      className="sm:w-[94px] h-[66px] w-[64px] sm:h-[100px] mb-9"
                    />
                    <span className="text-white">1 GIẢI NHẤT</span>
                    <span className="text-white">Hiện kim</span>
                    <span className="text-primary sm:text-[50px] text-[32px] font-[600]">
                      25 Triệu VNĐ
                    </span>
                    <span className="text-white">
                      {" "}
                      Và các phần thưởng hiện vật/ dịch vụ đặc biệt khác
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 w-ful h-full  sm:w-[400px] items-center">
                    {rewards.second.map((item, index) => (
                      <div
                        key={index}
                        className="w-full h-[48%]  px-8 py-8 sm:py-0 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] flex flex-col justify-center"
                      >
                        <span className="text-white block">{item.title}</span>
                        <span className="text-white block">
                          {item.rewardType}
                        </span>
                        <span className="text-primary sm:text-[45px] text-[28px] font-[600]">
                          {item.amount}
                        </span>
                        <span className="text-white"> {item.more}</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-[324px] flex flex-col gap-4 justify-between sm:h-full">
                    {rewards.thir.map((item, index) => (
                      <div
                        key={index}
                        className="px-8 sm:py-0 py-8 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] w-full h-[32%] flex flex-col justify-center"
                      >
                        <span className="text-white">{item.title}</span>
                        <span className="text-white">{item.rewardType}</span>
                        <span className="text-primary text-[24px] sm:text-[40px] font-[600]">
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
                className="sm:w-[940px] w-[92%] h-auto sm:h-[560px] rounded-[10px] border-[1px] border-[#ffffff26]"
              />
            </div>
          </LoadOnScreen>
          <div className=" flex flex-col items-center gap-3 px-4">
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
          <div className="w-full flex gap-10 justify-between sm:flex-row flex-col items-center">
            {contest.map((item, index) => (
              <div
                onClick={() => {
                  setContextIndex(index);
                }}
                key={index}
                className={`flex ${
                  !(contestIndex == index) && "opacity-40"
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
        <div className="mx-4 w-full border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] h-full  flex  sm:flex-row flex-col p-[10px]">
          <div className="sm:w-[50%] p-8">
            <span className="text-[24px] font-[600] text-white block">
              {contestsInfo[contestIndex].title}
            </span>
            <span className="text-[16px] text-[#aeb0b6] block">
              {contestsInfo[contestIndex].description}
            </span>
          </div>
          <div className="sm:w-[50%] p-8">
            <span className="text-[20px] font-[600] text-white block mb-4">
              Các lĩnh vực tiềm năng:
            </span>

            <div className="w-full flex flex-col gap-[18px]">
              {contestsInfo[contestIndex].values.map((item, index) => (
                <div key={index} className="flex gap-[10px]">
                  <span className="w-[22px] sm:w-[28px] h-[22px] sm:h-[28px] rounded-[4px] bg-primary text-black text-[14px] sm:text-[18px] font-[500] flex items-center justify-center  ">
                    {index + 1}
                  </span>
                  <span className="text-[14px] sm:text-[18px] max-w-[80%] text-[#e4e4e6]">
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
          <div className="flex sm:gap-6 gap-2 flex-wrap justify-center">
            {evaluations.map((item, index) => (
              <div
                key={index}
                className="sm:w-[18%] w-[30%] px-8 py-6 border-[1px] border-[#ffffff26] rounded-[16px] backdrop-blur-lg bg-[#4e4e4e46] flex flex-col justify-center"
              >
                <span className="text-white text-center font-[600] text-[14px] sm:text-[17px]">
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
