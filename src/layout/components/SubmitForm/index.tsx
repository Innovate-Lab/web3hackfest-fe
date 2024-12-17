"use client";
import InputField from "@/components/InputField";
import Dropdown from "../DropDown";
import { useEffect, useState } from "react";
import Button from "@/components/Button";

export type Info = {
  name: string;
  email: string;
  phone: string;
  job: string;
};

export type Project = {
  name: string;
  link: string;
  descritpion?: string;
};
function SubmitForm() {
  const [field, setField] = useState<string>("");
  const [numOfMem, setNumOfMem] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<{ id: number; message: string }>({
    id: -1,
    message: "",
  });
  const [project, setProject] = useState<Project>({
    name: "",
    link: "",
    descritpion: "",
  });
  const [capInfo, setCapInfo] = useState<Info>({
    name: "",
    email: "",
    phone: "",
    job: "",
  });

  const checkingData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (field === "") {
      setError({ id: 0, message: "Field is required" });
      return false;
    }
    if (capInfo.name === "") {
      setError({ id: 1, message: "Name is required" });
      return false;
    }
    if (capInfo.email === "") {
      setError({ id: 2, message: "Email is required" });
      return false;
    }
    if (!emailRegex.test(capInfo.email)) {
      setError({ id: 2, message: "Invalid email format" });
      return false;
    }
    if (capInfo.phone === "") {
      setError({ id: 3, message: "Phone is required" });
      return false;
    }
    if (capInfo.job === "") {
      setError({ id: 4, message: "Job is required" });
      return false;
    }
    if (project.name === "") {
      setError({ id: 5, message: "Project name is required" });
      return false;
    }
    if (project.link === "") {
      setError({ id: 6, message: "Link is required" });
      return false;
    }
    if (project.descritpion === "") {
      setError({ id: 7, message: "Description is required" });
      return false;
    }
    return true;
  };

  const [mems, setMems] = useState<Info[]>([
    {
      name: "",
      email: "",
      phone: "",
      job: "",
    },
    {
      name: "",
      email: "",
      phone: "",
      job: "",
    },
    {
      name: "",
      email: "",
      phone: "",
      job: "",
    },
    {
      name: "",
      email: "",
      phone: "",
      job: "",
    },
  ]);

  const handleSubmit = () => {
    if (checkingData()) {
      console.log({ field, ...capInfo, ...project });
    }
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex gap-5 justify-center flex-col bg-[#1b1b21] rounded-[10px] border-[1px] border-[#ffffff1a] p-8 sm:w-[1100px] w-[92%]">
        <div className="w-full ">
          <Dropdown
            error={error.id == 0}
            onSelect={(option: string) => {
              setError({ id: -1, message: "" });
              setField(option);
            }}
            value={field}
            title="Lĩnh vực dự thi*"
          />
        </div>
        <div className="sm:w-[50%] w-[100%] text-left flex flex-col gap-5">
          <span className="text-white text-[19px] font-[500]">
            Thông tin đội thi
          </span>
          <InputField
            value={numOfMem}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === "") {
                setNumOfMem(1);
              } else {
                if (parseInt(e.target.value) <= 5) {
                  setNumOfMem(parseInt(e.target.value));
                }
              }
            }}
            label="Số lượng thành viên ( Dự kiến- có thể thay đổi khi cần thiết)"
            placeholder="Vd: 1, 2, 3, ..."
            type="number"
            errorMessage=""
          />
        </div>

        <div className=" w-[100%]    ">
          <span className="text-white text-[19px] font-[500] mb-4 block">
            Thông tin trưởng nhóm*
          </span>
          <div className=" w-[100%] text-left flex   flex-wrap gap-5 ">
            <div className="w-full sm:w-[48%]">
              <InputField
                value={capInfo.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (error.id == 1) setError({ id: -1, message: "" });
                  setCapInfo((prev) => ({ ...prev, name: e.target.value }));
                }}
                label="Tên trưởng nhóm*"
                placeholder="Vd: Tran Huy Hoang"
                type="text"
                errorMessage={error.id === 1 ? error.message : ""}
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <InputField
                value={capInfo.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCapInfo((prev) => ({ ...prev, email: e.target.value }));
                  if (error.id == 2) setError({ id: -1, message: "" });
                }}
                label="Email trưởng nhóm*"
                placeholder="Vd: tranhuyhoang@gmail.com"
                type="email"
                errorMessage={error.id === 2 ? error.message : ""}
              />
            </div>{" "}
            <div className="w-full sm:w-[48%]">
              <InputField
                value={capInfo.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCapInfo((prev) => ({ ...prev, phone: e.target.value }));
                  if (error.id == 3) setError({ id: -1, message: "" });
                }}
                label="Số điện thoại trưởng nhóm*"
                placeholder="Vd: 097 123 4567"
                type="text"
                errorMessage={error.id === 3 ? error.message : ""}
              />
            </div>{" "}
            <div className="w-full sm:w-[48%]">
              <InputField
                value={capInfo.job}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCapInfo((prev) => ({ ...prev, job: e.target.value }));
                  if (error.id == 4) setError({ id: -1, message: "" });
                }}
                label="Nghề nghiệp*"
                placeholder="Vd: Sinh viên, Lập trình viên, Khởi nghiệp..."
                type="text"
                errorMessage={error.id === 4 ? error.message : ""}
              />
            </div>{" "}
          </div>
        </div>

        <div className="w-[100%] text-left flex flex-col gap-5">
          {numOfMem > 1 && (
            <span className="text-white text-[19px] font-[500]">
              Thông tin thành viên khác (Nếu có- nhằm mục đích BTC liên hệ khi
              cần thiết)
            </span>
          )}
          {/* generate mem field base on the numOfMems */}
          {numOfMem > 1 &&
            [...Array(numOfMem - 1)].map((_, index) => (
              <div key={index} className=" w-[100%]">
                <span className="text-white text-[18px] font-[500] block mb-4">
                  Thành viên {index + 1}
                </span>
                <div className="w-[100%] text-left flex   flex-wrap gap-5 ">
                  {" "}
                  <div className="w-full sm:w-[48%]">
                    <InputField
                      value={mems[index].name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setMems((prev) => {
                          const newMems = [...prev];

                          newMems[index] = {
                            ...newMems[index],
                            name: e.target.value,
                          };
                          return newMems;
                        });
                      }}
                      label="Tên thành viên"
                      placeholder="Vd: Tran Huy Hoang"
                      type="text"
                      errorMessage=""
                    />
                  </div>
                  <div className="w-full sm:w-[48%]">
                    <InputField
                      value={mems[index].email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setMems((prev) => {
                          const newMems = [...prev];

                          newMems[index] = {
                            ...newMems[index],
                            email: e.target.value,
                          };
                          return newMems;
                        });
                      }}
                      label="Email thành viên"
                      placeholder="Vd: tranhuyhoang@gmail.com"
                      type="email"
                      errorMessage=""
                    />
                  </div>{" "}
                  <div className="w-full sm:w-[48%]">
                    <InputField
                      value={mems[index].phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setMems((prev) => {
                          const newMems = [...prev];

                          newMems[index] = {
                            ...newMems[index],
                            phone: e.target.value,
                          };
                          return newMems;
                        });
                      }}
                      label="Số điện thoại thành viên"
                      placeholder="Vd: 097 123 4567"
                      type="text"
                      errorMessage=""
                    />
                  </div>{" "}
                  <div className="w-full sm:w-[48%]">
                    <InputField
                      value={mems[index].job}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setMems((prev) => {
                          const newMems = [...prev];

                          newMems[index] = {
                            ...newMems[index],
                            job: e.target.value,
                          };
                          return newMems;
                        });
                      }}
                      label="Nghề nghiệp"
                      placeholder="Vd: Sinh viên, Lập trình viên, Khởi nghiệp..."
                      type="text"
                      errorMessage=""
                    />
                  </div>{" "}
                </div>
              </div>
            ))}
          <div className="w-[100%] text-left flex flex-col gap-5">
            <span className="text-white text-[19px] font-[500]">
              Thông tin dự án*
            </span>
            <InputField
              value={project.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setProject((prev) => ({ ...prev, name: e.target.value }));
                if (error.id == 5) setError({ id: -1, message: "" });
              }}
              label="Tên dự án"
              placeholder="Vd: NearStack"
              type="text"
              errorMessage={error.id === 5 ? error.message : ""}
            />
            <span className="text-white text-[19px] font-[500]">
              Thông tin dự án*
            </span>
            <InputField
              value={project.link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setProject((prev) => ({ ...prev, link: e.target.value }));
                if (error.id == 6) setError({ id: -1, message: "" });
              }}
              label="Link dự án* ( Vui lòng đảm bảo share quyền truy cập cho BTC với Email: support@web3hackfest.org)

"
              placeholder="Link Drive, Pdf, Canva, ..."
              type="text"
              errorMessage={error.id === 6 ? error.message : ""}
            />

            <InputField
              errorMessage={error.id === 7 ? error.message : ""}
              placeholder="Message"
              value={project.descritpion || ""}
              type="text"
              label="Mô tả ngắn về dự án*"
              textarea
              onChange={(e) => {}}
              areaChange={(e) => {
                if (error.id == 7) setError({ id: -1, message: "" });
                setProject((prev) => ({
                  ...prev,
                  descritpion: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className="text-disable block sm:w-[70%] w-full">
          Thông tin đăng ký dự thi sẽ gửi qua mail trưởng nhóm, đội thi vui lòng
          kiểm tra mail. Mọi thông tin thắc mắc liên hệ qua nhóm Zalo hỗ trợ
          cuộc thi
        </div>
        <div className="flex w-full sm:justify-start justify-center">
          {" "}
          <Button
            hover
            rounded={false}
            size="md"
            click={() => {
              handleSubmit();
            }}
          >
            <span className="text-white block sm:px-[200px]">
              Xác nhận nộp bài
            </span>
          </Button>
        </div>
      </div>
      <div className="w-full mt-8 flex justify-center mb-8">
        <div className="flex w-[80%]  sm:w-fit flex-col gap-6 items-center bg-[#1b1b21] rounded-[10px] border-[1px] border-[#ffffff1a] p-8">
          <span className="text-[18px] sm:text-[24px] text-white font-[600] text-center">
            Tham gia group Zalo để được hỗ trợ:
          </span>
          <img
            src="assets/images/zaloQr.avif"
            alt=""
            className="sm:w-[220px] w-[120px] h-[120px] sm:h-[220px] rounded-[10px]"
          />
          <span className="text-[16px] sm:text-[16px] text-white text-center">
            Tham gia group Zalo để được hỗ trợ:
          </span>{" "}
          <span
            onClick={() => {
              window.open("https://zalo.me/g/btdwwx469", "_blank");
            }}
            className="text-[16px] mt-[-8px] sm:text-[16px] text-white text-center cursor-pointer"
          >
            https://zalo.me/g/btdwwx469
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubmitForm;
