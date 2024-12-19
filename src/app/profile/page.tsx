"use client";
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { axiosInstance, axiosInstancePrivate } from "@/axios/axios";
import { useToast } from "../../hooks/use-toast";
import { usePrivate } from "../../hooks/usePrivateAxios";
import SubmitForm from "@/layout/components/SubmitForm";
import { ChevronDown } from "lucide-react";
import SummitedProject from "@/components/SummitedProject";

export type Contest = {
  name: string;
  email: string;
  phone: string;
  job: string;
  numOfMems: number;
  projectName: string;
  projectLink: string;
  projectDescription: string;
};

export type ContestDetails = {
  contestName: string;
  created: string;
  description: string;
  field: string;
  id: string;
  link: string;
  members: Array<{
    name: string;
    email: string;
    phone: string;
    job: string;
  }>;
  numberOfMembers: number;
};

const page = () => {
  const { data: session } = useSession();
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage input values
  const [formData, setFormData] = useState({
    username: session?.user?.username || "",
    phone: session?.user?.phone || "",
  });
  useEffect(() => {
    if (session?.user) {
      setFormData({
        username: session?.user?.username || "",
        phone: session?.user?.phone || "",
      });
    }
  }, [session]);

  // Backup state for canceling edits
  const [backupData, setBackupData] = useState(formData);
  const { toast } = useToast();
  const privateAxios = usePrivate();
  const [contestData, setContestData] = useState<Contest>({
    name: "",
    email: "",
    phone: "",
    job: "",
    numOfMems: 0,
    projectName: "",
    projectLink: "",
    projectDescription: "",
  });
  const [contests, setContests] = useState<Contest[]>([]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enable editing
  const handleEdit = () => {
    setBackupData(formData); // Save current values
    setIsEditing(true);
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData(backupData); // Restore original values
    setIsEditing(false);
  };

  // Save updated data via API
  const handleSave = async () => {
    try {
      // const response = await fetch("/api/update-user", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: session?.user?.email,
      //     username: formData.username,
      //     phone: formData.phone,
      //   }),
      // });
      const response = await privateAxios
        .patch("/user/update-info", {
          username: formData.username,
          phoneNumber: formData.phone,
        })
        .then((res) => {
          toast({
            variant: "success",
            title: "Cập nhật thông tin thành công",
          });
          setIsEditing(false);
        })
        .catch((error) => {
          // Kiểm tra và log chi tiết lỗi
          if (error.response) {
            console.log("Response Error Data:", error.response.data);
            console.log("Response Status Code:", error.response.status);
            console.log("Response Headers:", error.response.headers);
          } else if (error.request) {
            console.log("Request Error (no response):", error.request);
          } else {
            console.log("Other Error Message:", error.message);
          }

          toast({
            variant: "error",
            title: "Cập nhật thông tin thất bại",
            description:
              error.response?.data?.message ||
              "Đã có lỗi xảy ra, vui lòng thử lại.",
          });
        });
      // if (response.ok) {
      //   alert("Cập nhật thành công!");
      //   setIsEditing(false);
      // } else {
      //   alert("Cập nhật thất bại. Vui lòng thử lại.");
      // }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Đã xảy ra lỗi khi cập nhật.");
    }
  };

  useEffect(() => {
    const res = privateAxios
      .get("/contest/get")
      .then((res) => {
        if (res?.data?.data?.contests) {
          console.log(res.data.data.contests);
          setContests(
            res.data.data.contests.map((contest: ContestDetails) => {
              return {
                name: contest.members[0].name,
                email: contest.members[0].email,
                phone: contest.members[0].phone,
                job: contest.members[0].job,
                numOfMems: contest.numberOfMembers,
                projectName: contest.contestName,
                projectLink: contest.link,
                projectDescription: contest.description,
              };
            })
          );
        }
      })
      .catch((err) => {
        console.warn(err);
      });

    console.log(res);
  }, []);

  return (
    <div className="w-full text-[#E4E4E6]">
      <div className="flex flex-col gap-8 justify-center items-center pt-[60px]">
        <div className="text-white text-[45px]">Tài khoản</div>
        <div className="w-[50%] bg-[rgba(78,78,78,0.2)] px-8 py-6 flex rounded-xl">
          <img src="/icon/person.png" alt="" className="w-[244px] h-[244px]" />

          <div className="flex flex-col justify-center gap-4">
            <div>
              <label>Email:</label>
              <input
                type="text"
                value={session?.user?.email || "No email"}
                disabled
                className="bg-transparent text-white px-2 py-1 w-full border-none"
              />
            </div>

            <div>
              <label>Họ tên:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`${
                  isEditing
                    ? "bg-gray-300 text-black"
                    : "bg-transparent text-white"
                } px-2 py-1 rounded w-full`}
              />
            </div>

            <div>
              <label>Số điện thoại:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`${
                  isEditing
                    ? "bg-gray-300 text-black"
                    : "bg-transparent text-white"
                } px-2 py-1 rounded w-full`}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="py-[10px] px-[16px] bg-[#4CAF50] rounded-2xl text-white"
                  >
                    Lưu
                  </button>
                  <button
                    onClick={handleCancel}
                    className="py-[10px] px-[16px] bg-[#FF6347] rounded-2xl text-white"
                  >
                    Hủy
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="py-[10px] px-[16px] bg-[#FFA500] rounded-2xl text-white"
                >
                  Cập nhật
                </button>
              )}

              <button
                onClick={() => signOut()}
                className="py-[10px] px-[16px] bg-[#358FCE] rounded-2xl text-white"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-10 flex justify-center">
        <span className="text-white text-[32px]">Thông tin bài dự thi</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        {contests.map((contest, index) => (
          <SummitedProject key={index} contest={contest} />
        ))}
      </div>
    </div>
  );
};

export default page;
