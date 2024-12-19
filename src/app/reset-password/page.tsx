"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@/components/Button";
import { axiosInstance } from "@/axios/axios";
import { toast } from "../../hooks/use-toast";
import { useSearchParams } from "next/navigation";
function ResetPassword() {
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [validUppercase, setValidUppercase] = useState(false);
  const [validLowercase, setValidLowercase] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [showconfirm, setShowconfirm] = useState(false);
  const [searchParams] = useSearchParams();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setValidLength(value.length >= 8);
    setValidUppercase(/[A-Z]/.test(value));
    setValidLowercase(/[a-z]/.test(value));
    setValidNumber(/[0-9]/.test(value));
  };

  const handleChangeConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirm(value);
    setValidLength(value.length >= 8);
    setValidUppercase(/[A-Z]/.test(value));
    setValidLowercase(/[a-z]/.test(value));
    setValidNumber(/[0-9]/.test(value));
  };

  useEffect(() => {
    console.log(searchParams);
    if (!searchParams) {
      // alert("fail to get token");
      //router.push("/forgot-password");
      return;
    }

    axiosInstance
      .get(`/user/check-token-reset-password?token=${searchParams[1]}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status !== 500) {
          alert(`router.push("/forgot-password");`);
        }
      });
  }, []);
  const handleChangePassword = async () => {
    if (validLength && validUppercase && validLowercase && validNumber) {
      const res = await axiosInstance
        .post(`/user/reset-password`, {
          password,
          token: new URLSearchParams(window.location.search).get("token"),
        })
        .then((res) => {
          toast({
            title: "Successfull!",
            description: "Đổi mật khẩu thành công",
            variant: "success",
          });
          console.log(res.data);
        })
        .catch((err) => {
          toast({
            title: "Error!",
            description: "Đổi mật khẩu không thành công",
            variant: "error",
          });
          console.log(err);
        });

      console.log(res);
    } else {
      toast({
        title: "Error!",
        description: "Mật khẩu không hợp lệ",
        variant: "error",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="w-full flex justify-center items-center min-h-[100vh]">
      <div className="bg-[#1b1b21] rounded-[10px] border-[1px] border-[#ffffff1a] p-8 sm:w-[1100px] w-[92%]">
        <div className="flex w-full justify-center mb-10">
          <span className="text-white text-[32px] font-[600]">
            Reset Password
          </span>
        </div>
        <div>
          <Label className="text-white block mb-4">Password</Label>
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

        <div>
          <Label className="text-white block my-4">Confirm password</Label>
          <div className="relative">
            <Input
              placeholder="Password"
              type={showconfirm ? "text" : "password"}
              value={confirm}
              onChange={handleChangeConfirm}
              className="focus:outline-none focus:ring-0 border-none bg-[#F9F7FA1F] p-4"
            />
            <button
              type="button"
              onClick={() => {
                setShowconfirm(!showconfirm);
              }}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400"
            >
              {showconfirm ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mt-4">
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
        <div className="w-full flex justify-center">
          <Button size="sm" rounded={false} click={handleChangePassword}>
            <span className="text-white font-[600]">Change password</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
