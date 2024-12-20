"use client";
import { useToast } from "@/hooks/use-toast";
import { axiosInstance } from "@/axios/axios";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";

const Signup = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const [validLength, setValidLength] = useState(false);
  const [validUppercase, setValidUppercase] = useState(false);
  const [validLowercase, setValidLowercase] = useState(false);
  const [validNumber, setValidNumber] = useState(false);

  const searchParams = useSearchParams();
  const [utm, setUtm] = useState<string>("");
  const [utmSource, setUtmSource] = useState<string>("default_source");
  const [utmMedium, setUtmMedium] = useState<string>("default_medium");
  const [utmCampaign, setUtmCampaign] = useState<string>("default_campaign");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Now we know we're on the client side, so it's safe to use window
      setUtm(window.location.href);
      setUtmSource(searchParams.get("utm_source") || "default_source");
      setUtmMedium(searchParams.get("utm_medium") || "default_medium");
      setUtmCampaign(searchParams.get("utm_campaign") || "default_campaign");
    }
  }, [searchParams]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    setValidLength(value.length >= 8);
    setValidUppercase(/[A-Z]/.test(value));
    setValidLowercase(/[a-z]/.test(value));
    setValidNumber(/[0-9]/.test(value));
  };

  const validateInputs = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^0\d{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Kiểm tra ít nhất 1 chữ cái in hoa, 1 chữ cái thường, 1 chữ số và độ dài tối thiểu 8 ký tự

    if (!name || !email || !phone || !password) {
      toast({
        title: "Thông báo",
        description: "Vui lòng điền đầy đủ tất cả các ô thông tin.",
        variant: "error",
      });
      return false;
    }

    if (!emailRegex.test(email)) {
      toast({
        title: "Lỗi định dạng",
        description: "Email không hợp lệ.",
        variant: "error",
      });
      return false;
    }

    if (!phoneRegex.test(phone)) {
      toast({
        title: "Lỗi định dạng",
        description: "Số điện thoại phải có 10 số và bắt đầu bằng số 0.",
        variant: "error",
      });
      return false;
    }

    if (!passwordRegex.test(password)) {
      toast({
        title: "Lỗi định dạng mật khẩu",
        description:
          "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường và 1 số.",
        variant: "error",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validateInputs()) return;

    console.log("utm_source:", utmSource);
    console.log("utm_medium:", utmMedium);
    console.log("utm_campaign:", utmCampaign);
    const requestBody = {
      email: email,
      username: name,
      phoneNumber: phone,
      password: password,
      utm_data: {
        utm: utm,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
      },
    };

    try {
      const response = await axiosInstance.post("/user/signup", requestBody);

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      localStorage.setItem("user_id", response.data.data.user_info.id);
      toast({
        title: "Đăng ký thành công",
        description: "Hãy xác nhận trong Email để tiếp tục đăng nhập",
        variant: "success",
      });
      router.push("/signup/thank-you");
    } catch (error) {
      console.error(
        "Error during signup:",
        (error as { message: string }).message || error
      );
      toast({
        title: "Đăng ký thất bại",
        description: `${(error as { message: string }).message}`,
        variant: "error",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-8 justify-center items-center sm:p-8 w-pageContent px-4">
      <div className="text-white text-[24px] sm:text-[45px] text-center">
        Đăng ký tài khoản Web3 HackFest
      </div>
      <div className="text-[#94969D] text-[13px] sm:text-[16px] text-center w-full sm:w-[50%]">
        Vui lòng đăng ký tài khoản để tham gia cuộc thi Web3 & AI Ideathon và
        nhận thông tin các hoạt động của Web3 HackFest
      </div>
      <div className="text-white text-[13px] sm:text-[16px] text-center w-full sm:w-[50%]">
        Lưu ý: Đảm bảo các thông tin chính xác để Bạn tổ chức có thể liên hệ
        nhận giải thưởng và quà tặng khi cần thiết
      </div>
      <div className="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg px-8 py-6 w-[100%] sm:w-[536px] text-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-white mb-2 block">Họ và tên</Label>
            <Input
              placeholder="Họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
              type="text"
            />
          </div>
          <div>
            <Label className="text-white  mb-2 block">Số điện thoại</Label>
            <Input
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
              maxLength={10}
              type="tel"
            />
          </div>
          <div>
            <Label className="text-white  mb-2 block">Email</Label>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
              type="email"
            />
          </div>
          <div>
            <Label className="text-white  mb-2 block">Password</Label>
            <div className="relative">
              <Input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#358FCE] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
