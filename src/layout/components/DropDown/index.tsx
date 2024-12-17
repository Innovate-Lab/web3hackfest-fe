import { useState } from "react";

interface Props {
  value: string;
  title: string;
  error: boolean;
  onSelect: (option: string) => void;
}

const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Trí tuệ nhân tạo (AI)",
    "Công nghệ chuỗi khối (Blockchain/Web3)",
    "Kết hợp giữa Trí tuệ nhân tạo (AI) và Công nghệ chuỗi khối (Blockchain/Web3)",
  ];

  const handleSelect = (option: string) => {
    props.onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative w-full">
        <span className="text-white text-[16px]">{props.title}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full   bg-[#2f2f2f] text-white p-3 rounded-md shadow-sm flex justify-between items-center focus:border-[1px] focus:border-primary ${
            props.error && "border-[1px] border-[red]"
          }`}
        >
          <span>{props.value || "Lựa chọn..."}</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute mt-2 w-full bg-[#2f2f2f] border  rounded-md shadow-lg z-10">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-[#5c5c5c] cursor-pointer text-white"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {props.error && (
        <span className="text-[red]">Vui lòng chọn lĩnh vực dự thi</span>
      )}
    </>
  );
};

export default Dropdown;
