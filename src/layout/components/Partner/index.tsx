"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";

const content = [
  `NEAR APAC là sự kiện tiền điện tử hàng đầu của APAC, thu hút 8.000+ người tham gia, bao gồm hàng trăm nhà lãnh đạo và người sáng lập từ khắp các hệ sinh thái Web2 và Web3 toàn cầu, cộng đồng Blockchain, Doanh nhân, quan chức chính phủ, v.v.`,
  `Sự hiện diện của bạn với tư cách là nhà tài trợ hoặc nhà triển lãm trong suốt hội nghị sẽ đảm bảo tác động lâu dài trong tâm trí của những người tham dự. Ngoài ra, có nhiều cơ hội kết nối tại địa điểm, nơi bạn có thể nói chuyện với người dùng cuối, đối tác tiềm năng và các cá nhân quan tâm khác.`,
];
type PartnerData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  telegram: string;
  message: string;
};
function PartnerForm() {
  const [data, setData] = useState<PartnerData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    telegram: "",
    message: "",
  });

  const [error, setError] = useState<{ id: number; message: string }>({
    id: -1,
    message: "",
  });

  const checkingData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (data.name === "") {
      setError({ id: 0, message: "Name is required" });
      return false;
    }
    if (data.email === "") {
      setError({ id: 1, message: "Email is required" });
      return false;
    }
    if (!emailRegex.test(data.email)) {
      setError({ id: 1, message: "Invalid email format" });
      return false;
    }
    if (data.phone === "") {
      setError({ id: 2, message: "Phone is required" });
      return false;
    }
    if (data.company === "") {
      setError({ id: 3, message: "Company is required" });
      return false;
    }
    if (data.telegram === "") {
      setError({ id: 4, message: "Telegram is required" });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    checkingData();
    console.log(data);
  };
  return (
    <div className="sm:w-[1100px] w-[92%] bg-[#1b1b21] rounded-[10px] border-[1px] border-[#ffffff1a] sm:flex block">
      <div className="w-full sm:w-[50%] p-[48px]">
        <span className="text-white text-[22px] font-[600] block mb-[20px]">
          Cơ hội tài trợ
        </span>
        {content.map((item, index) => (
          <span key={index} className="text-white block mb-[16px]">
            {item}
          </span>
        ))}
      </div>
      <div className="w-full sm:w-[50%] p-[48px] bg-[#15151a]">
        <InputField
          errorMessage={error.id === 0 ? error.message : ""}
          type="text"
          label=""
          value={data.name}
          placeholder="Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (error.id == 0) setError({ id: -1, message: "" });
            setData((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <InputField
          errorMessage={error.id === 1 ? error.message : ""}
          type="text"
          label=""
          value={data.email}
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (error.id == 1) setError({ id: -1, message: "" });
            setData((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <InputField
          errorMessage={error.id === 2 ? error.message : ""}
          type="text"
          label=""
          value={data.phone}
          placeholder="+84 ..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (error.id == 2) setError({ id: -1, message: "" });
            setData((prev) => ({ ...prev, phone: e.target.value }));
          }}
        />
        <InputField
          errorMessage={error.id === 3 ? error.message : ""}
          type="text"
          label=""
          value={data.company}
          placeholder="Company"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (error.id == 3) setError({ id: -1, message: "" });
            setData((prev) => ({ ...prev, company: e.target.value }));
          }}
        />
        <InputField
          errorMessage={error.id === 4 ? error.message : ""}
          type="text"
          label=""
          value={data.telegram}
          placeholder="Telegram"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (error.id == 4) setError({ id: -1, message: "" });
            setData((prev) => ({ ...prev, telegram: e.target.value }));
          }}
        />
        <InputField
          textarea
          errorMessage={error.id === 5 ? error.message : ""}
          type="text"
          label=""
          value={data.message}
          placeholder="Message"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          areaChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (error.id == 5) setError({ id: -1, message: "" });
            setData((prev) => ({ ...prev, message: e.target.value }));
          }}
        />
        <Button
          full
          size="sm"
          click={() => {
            handleSubmit();
          }}
          rounded={false}
        >
          <span className="text-white text-[16px] font-[600] text-center w-full block">
            SEND MESSAGE
          </span>
        </Button>
      </div>
    </div>
  );
}

export default PartnerForm;
