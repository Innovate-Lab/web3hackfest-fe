"use client";

import W3Field from "@/components/W3Field";

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

function Partners() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-pageContent flex flex-col items-center">
        <div className="  flex-col w-[80%] items-center gap-10 justify-center">
          <span className="text-white text-[36px] font-[500] block mb-10 w-full text-center">
            Web3 HackFest 2023 Our Past Speakers
          </span>
          <div className="flex gap-4 sm:gap-[32px] flex-wrap items-center justify-between">
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
      <W3Field
        title="Nhà tài trợ 2023"
        button={{
          title: "Become Our Sponsor",
          click: () => {
            window.location.href = "/become-sponsor";
          },
        }}
      >
        <div className="flex flex-col gap-4 w-[90%] mt">
          {[
            [1, 2, 1, 1],
            [1, 2, 1, 1],
            [1, 1, 2, 1],
            [1, 1, 1, 1],
          ].map((item, index) => (
            <div className="flex justify-between w-full flex-wrap" key={index}>
              {item.map((child_item, child_index) => (
                <img
                  key={child_index}
                  className="sm:h-[48px] sm:w-auto  w-auto h-[18px]"
                  src={`${
                    child_item == 1
                      ? "https://framerusercontent.com/images/MREXi78JgugwcKzmAcmRMibsMLw.png"
                      : "https://framerusercontent.com/images/edEhmDVWGBMjovrSTptO9gS1ZE.png"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </W3Field>

      <W3Field
        title="Đối tác truyền thông 2023"
        button={{
          title: "Become Our Partner",
          click: () => {
            window.location.href = "/become-partner";
          },
        }}
      >
        <div className="flex flex-col gap-4 w-[90%] mt">
          {[
            [1, 2, 1, 1],
            [1, 2, 1, 1],
            [1, 1, 2, 1],
            [1, 1, 1, 1],
          ].map((item, index) => (
            <div className="flex justify-between w-full flex-wrap" key={index}>
              {item.map((child_item, child_index) => (
                <img
                  key={child_index}
                  className="sm:h-[48px] h-[18px] w-auto"
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
        button={{
          title: "Become Our Partner",
          click: () => {
            window.location.href = "/become-partner";
          },
        }}
      >
        {" "}
        <div className="flex gap-4 sm:w-[90%] mt flex-wrap items-center justify-center">
          {[
            1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1,
            1, 1, 1, 2, 1, 1, 1, 1, 1,
          ].map((item, index) => (
            <div className="sm:px-8 w-fit  px-4" key={index}>
              <img
                className="sm:h-[48px] h-[30px] w-auto object-cover object-center"
                src={
                  item == 1
                    ? "https://framerusercontent.com/images/asVCrm0gQCx2fAYWMItUP6JUaU.png"
                    : "https://framerusercontent.com/images/u1sUQGeRqksYLP72YFi2f7vdM.png"
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </W3Field>
    </div>
  );
}

export default Partners;
