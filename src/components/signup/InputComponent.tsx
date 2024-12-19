"use client";
//@ts-nocheck
import React, { useState } from "react";

export enum InputType {
  Text = "text",
  Number = "number",
  Password = "password",
  Email = "email",
  Phone = "tel", // Adding 'Phone' type
}

interface InputProps {
  title: string;
  value: string | number;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<number>>;
  type: InputType;
}

const InputComponent = ({ title, value, setValue, type }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === InputType.Phone) {
      // Limit input to 10 digits
      const input = e.target.value.replace(/\D/g, "").slice(0, 10);
      //@ts-ignore
      setValue(input);
    } else {
      //@ts-ignore
      setValue(e.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-1 relative">
      <label
        htmlFor={title.toLowerCase()}
        className="block text-sm font-medium text-white p-2 mb-1 text-[16px]"
      >
        {title}
      </label>
      <div className="relative">
        <input
          id={title.toLowerCase()}
          type={type === InputType.Password && showPassword ? "text" : type}
          className="w-full p-[15px] bg-[rgba(249,247,250,0.12)] rounded-xl text-white"
          placeholder={title}
          value={value}
          onChange={handleChange}
          required
        />
        {type === InputType.Password && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-4 flex items-center text-gray-400"
          >
            {showPassword ? "🙈" : "👁️"} {/* Use icons if preferred */}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
