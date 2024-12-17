import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";

const content = {
  title: "BECOME A SPEAKER",
  description: `At NEAR APAC 2023, we believe that outstanding speakers and compelling content are the keys to a successful event. Our carefully curated lineup of speakers includes accomplished C-level executives and visionary founders who are leading the way in shaping the digital asset economy.

We receive a high volume of inbound requests in addition to our proactive outreach efforts, so we recommend submitting your application early and ensuring that your proposal is not only engaging and informative but also relevant to our audience.

We look forward to reviewing your submission and potentially having you join us as a speaker at NEAR APAC 2023.`,
};

const topics = [
  { label: "A. Blockchain", value: "Blockchain" },
  { label: "B. Cryptocurrency", value: "Cryptocurrency" },
  { label: "D. DeFi", value: "DeFi" },
  { label: "E. Stablecoin", value: "Stablecoin" },
  { label: "F. NFT", value: "NFT" },
  { label: "G. Metaverse", value: "Metaverse" },
  { label: "H. GameFi", value: "GameFi" },
  { label: "I. Regulations", value: "Regulations" },
  { label: "J. Other", value: "Other" },
];

type SpeakerData = {
  name: string;
  company: string;
  position: string;
  email: string;
  telegram: string;
  expertise: string[];
  moreInfo: string;
  interest: string;
  previousSpeakingEngagements: string;
  deliveredSpeech: string;
};

function SpeakerForm() {
  const [data, setData] = useState<SpeakerData>({
    name: "",
    company: "",
    position: "",
    email: "",
    telegram: "",
    expertise: [],
    moreInfo: "",
    interest: "",
    previousSpeakingEngagements: "",
    deliveredSpeech: "no",
  });

  const [error, serError] = useState<{ id: number; message: string }>({
    id: -1,
    message: "",
  });

  const handleSubmit = () => {
    checkingData();
    console.log(data);
  };

  const checkingData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (data.name === "") {
      serError({ id: 0, message: "Name is required" });
      return false;
    }
    if (data.company === "") {
      serError({ id: 1, message: "Company is required" });
      return false;
    }
    if (data.position === "") {
      serError({ id: 2, message: "Position is required" });
      return false;
    }
    if (data.email === "") {
      serError({ id: 3, message: "Email is required" });
      return false;
    }
    if (!emailRegex.test(data.email)) {
      serError({ id: 3, message: "Invalid email format" });
      return false;
    }
    if (data.telegram === "") {
      serError({ id: 4, message: "Telegram is required" });
      return false;
    }
    if (data.moreInfo === "") {
      serError({ id: 5, message: "More info is required" });
      return false;
    }
    if (data.interest === "") {
      serError({ id: 6, message: "Interest is required" });
      return false;
    }
    return true;
  };

  const handleCheckboxChange = (topic: string) => {
    setData((prev) =>
      prev.expertise.includes(topic)
        ? { ...prev, expertise: prev.expertise.filter((t) => t !== topic) }
        : { ...prev, expertise: [...prev.expertise, topic] }
    );
  };
  return (
    <div className="bg-[#1b1b21] rounded-[10px] border-[1px] border-[#ffffff1a] p-8 sm:w-[1100px] w-[92%]">
      <span className="text-white text-[20px] uppercase font-[500] block mb-[14px]">
        {content.title}
      </span>
      <span className="text-white">{content.description}</span>
      <div className="field flex flex-col gap-4">
        <span className="title">Xin chào! Hãy điền tên của bạn vào trường</span>

        <InputField
          value={data.name}
          onChange={(e) => {
            serError({ id: -1, message: "" });
            setData({ ...data, name: e.target.value });
          }}
          type="text"
          placeholder="Họ tên"
          label="Nhập họ và tên của bạn:"
          errorMessage={error.id == 0 ? error.message : ""}
        />
        <InputField
          value={data.company}
          onChange={(e) => {
            serError({ id: -1, message: "" });
            setData({ ...data, company: e.target.value });
          }}
          type="text"
          placeholder="Công ty"
          label="Bạn có thể vui lòng cung cấp trang web cho công ty hoặc chi nhánh của bạn không?"
          errorMessage={error.id == 1 ? error.message : ""}
        />
        <InputField
          value={data.position}
          onChange={(e) => {
            serError({ id: -1, message: "" });
            setData({ ...data, position: e.target.value });
          }}
          type="text"
          placeholder="Ví dụ: Giám đốc điều hành, Người sáng lập, Đối tác, v.v."
          label="Vị trí hoặc vai trò của bạn trong công ty hoặc liên kết của bạn là gì?"
          errorMessage={error.id == 2 ? error.message : ""}
        />
        <InputField
          value={data.email}
          onChange={(e) => {
            serError({ id: -1, message: "" });
            setData({ ...data, email: e.target.value });
          }}
          type="text"
          placeholder="Email của bạn."
          label="Email của bạn."
          errorMessage={error.id == 3 ? error.message : ""}
        />
        <InputField
          value={data.telegram}
          onChange={(e) => {
            serError({ id: -1, message: "" });
            setData({ ...data, telegram: e.target.value });
          }}
          type="text"
          placeholder="ID Telegram của bạn."
          label="ID Telegram của bạn."
          errorMessage={error.id == 4 ? error.message : ""}
        />

        {/* experties */}

        <div className="p-4 w-full mx-auto">
          <h3 className="text-lg font-medium mb-4 text-white">
            What are your areas of expertise? Please select 2-3 topics that you
            are most knowledgeable about and comfortable speaking on with
            authority.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
            {topics.map((topic) => (
              <label
                key={topic.value}
                className="text-white flex items-center space-x-2  cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={topic.value}
                  checked={data.expertise.includes(topic.value)}
                  onChange={() => handleCheckboxChange(topic.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span>{topic.label}</span>
              </label>
            ))}
          </div>
        </div>

        <InputField
          value={data.moreInfo}
          onChange={(e) => {}}
          areaChange={(e) => setData({ ...data, moreInfo: e.target.value })}
          type="text"
          placeholder="Message"
          label="Dự đoán bất kỳ sự phát triển lớn nào trong tương lai gần?"
          textarea
          errorMessage={error.id == 5 ? error.message : ""}
        />
        <InputField
          value={data.interest}
          onChange={(e) => {}}
          areaChange={(e) => setData({ ...data, interest: e.target.value })}
          type="text"
          placeholder="Message"
          label="Bạn muốn xem những lĩnh vực quan tâm hoặc chủ đề nào khác được đề cập tại NEAR APAC 2023?"
          errorMessage={error.id == 6 ? error.message : ""}
          textarea
        />
        {/* interests */}
        <InputField
          value={data.previousSpeakingEngagements}
          onChange={(e) => {}}
          areaChange={(e) =>
            setData({ ...data, previousSpeakingEngagements: e.target.value })
          }
          type="text"
          placeholder="Message"
          label="Bạn có thể vui lòng chia sẻ bất kỳ buổi nói chuyện nào trước đây mà bạn đã có hoặc kinh nghiệm nói trước đám đông đáng chú ý không?"
          errorMessage={""}
          textarea
        />
        <div className="w-full mb-4">
          <h3 className="text-lg font-medium mb-4 text-white">
            Bạn hoặc bất kỳ đại diện nào từ công ty của bạn có phát biểu tại
            NEARCON 2022 không
          </h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center flex-col">
              <input
                type="radio"
                name="speech"
                value="yes"
                checked={data.deliveredSpeech === "yes"}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    deliveredSpeech: e.target.value,
                  }))
                }
                className="h-4 w-4 text-blue-600 cursor-pointer"
              />
              <span className="text-white">Yes</span>
            </div>

            <div className="flex items-center flex-col mt-0">
              <input
                type="radio"
                name="speech"
                value="no"
                checked={data.deliveredSpeech === "no"}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    deliveredSpeech: e.target.value,
                  }))
                }
                className="h-4 w-4 text-blue-600 cursor-pointer"
              />
              <span className="text-white">No</span>
            </div>
          </div>
        </div>

        <Button
          hover
          full
          rounded={false}
          size="sm"
          click={() => handleSubmit()}
        >
          <span className="text-white w-full text-center block uppercase text-[16px] font-[600]">
            SEND
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SpeakerForm;
