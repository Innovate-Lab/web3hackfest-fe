"use client";
import { useToast } from "@/app/hooks/use-toast";
import InputComponent, { InputType } from "@/components/signup/InputComponent";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const page = () => {
  const { toast } = useToast()

  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const [validLength, setValidLength] = useState(false);
  const [validUppercase, setValidUppercase] = useState(false);
  const [validLowercase, setValidLowercase] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setValidLength(value.length >= 8);
    setValidUppercase(/[A-Z]/.test(value));
    setValidLowercase(/[a-z]/.test(value));
    setValidNumber(/[0-9]/.test(value));
  };
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
  
    const requestBody = {
      email: email,
      username: name,
      phoneNumber: phone,
      password: password,
      utm_data: {
        utm: "asdfasd",
        utm_source: "asdfasdf",
        utm_medium: "saasdfasdf",
        utm_campaign: "asdfasdf",
      },
    };
  
    try {
      const response = await fetch("http://localhost:3001/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Response data:", responseData);
      toast({
        title: "Đăng ký thành công",
        description: "Hãy xác nhận trong Email để tiếp tục đăng nhập",
        variant:"success"
      })

    } catch (error: any) {
      console.log(error)
      console.error("Error during signup:", error.message || error);
      toast({
        title: "Đăng ký thất bại",
        description: `${error.message}`,
        variant:"error"
      })
    }
  };
  return (
    // <div classNameName="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg p-4 w-[400px] h-[438px]">

    // </div>
    <div className="flex flex-col gap-8 justify-center items-center p-8">
      <div className="text-white text-[45px] text-center">
        Đăng ký tài khoản Web3 HackFest
      </div>
      <div className="text-[#94969D] text-[16px] text-center w-[50%]">
        Vui lòng đăng ký tài khoản để tham gia cuộc thi Web3 & AI Ideathon và
        nhận thông tin các hoạt động của Web3 HackFest
      </div>
      <div className="text-white text-[16px] text-center w-[50%]">
        Lưu ý: Đảm bảo các thông tin chính xác để Bạn tổ chức có thể liên hệ
        nhận giải thưởng và quà tặng khi cần thiết
      </div>
      <div className="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg px-8 py-6 w-[536px]  ">
        <form action="#" method="POST">
          <InputComponent
            title={"Họ và tên"}
            value={name}
            setValue={setName}
            type={InputType.Text}
          />
          <InputComponent
            title={"Số điện thoại"}
            value={phone}
            setValue={setPhone}
            type={InputType.Phone}
          />
          <InputComponent
            title={"Email"}
            value={email}
            setValue={setEmail}
            type={InputType.Email}
          />
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white p-2 mb-1 text-[16px]"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={`${ showPassword ? "text" : "password"}`}
                id="password"
                name="password"
                className="w-full p-[15px] bg-[rgba(249,247,250,0.12)] rounded-xl text-white"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange} // Fixing the onChange handler
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400"
              >
                {showPassword ? "🙈" : "👁️"} {/* Use icons if preferred */}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#358FCE] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            onClick={handleSubmit}
          >
            Đăng ký
          </button>
          <div className="flex flex-col gap-[10px]">
            <div
              className={`flex gap-1 text-[12px] ${
                validLength ? "text-white" : "text-gray-400"
              }`}
            >
              <IoCloseSharp className="self-center text-[16px]" />
              <span>Ít nhất 8 ký tự</span>
            </div>
            <div
              className={`flex gap-1 text-[12px] ${
                validUppercase ? "text-white" : "text-gray-400"
              }`}
            >
              <IoCloseSharp className="self-center text-[16px]" />
              Ít nhất một chữ in hoa
            </div>
            <div
              className={`flex gap-1 text-[12px] ${
                validLowercase ? "text-white" : "text-gray-400"
              }`}
            >
              <IoCloseSharp className="self-center text-[16px]" />
              Ít nhất một chữ thường
            </div>
            <div
              className={`flex gap-1 text-[12px] ${
                validNumber ? "text-white" : "text-gray-400"
              }`}
            >
              <IoCloseSharp className="self-center text-[16px]" />
              Ít nhất một chữ số
            </div>
            {/* <div
              className={`flex gap-1 text-[12px] ${
                validSpecialChar ? "text-white" : "text-gray-400"
              }`}
            >
              <IoCloseSharp className="self-center text-[16px]" />
              Ít nhất một ký tự đặc biệt
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
