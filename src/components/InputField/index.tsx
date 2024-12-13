import React from "react";

interface Props {
  label: string;
  type: string;
  value: string | number;
  placeholder: string;
  errorMessage: string;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField(props: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
  };
  return (
    <div className="w-full flex flex-col gap-[10px]">
      <span className="text-white text-[16px] block">{props.label}</span>
      <input
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => handleChange(e)}
        className="w-full p-4 bg-field outline-none text-white rounded-[10px] focus-within:outline-[#c9c8cc]"
      />
      <span className="text-red-500 text-[13px] block">
        {props.errorMessage}
      </span>
    </div>
  );
}

export default InputField;
