"use client";
import InputField from "@/components/InputField";

import Dropdown from "../DropDown";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import { usePrivate } from "@/hooks/usePrivateAxios";
import { toast, useToast } from "@/hooks/use-toast";
import { Pencil } from "lucide-react";
import { Contest } from "@/app/profile/page";
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
function SubmitForm({ view, data }: { view?: boolean; data?: Contest }) {
  const [field, setField] = useState<string>("");
  const [numOfMem, setNumOfMem] = useState<number>(1);
  const session = useSession();
  const privateAxios = usePrivate();
  const [disable, setDisable] = useState<boolean>(view ? true : false);
  const [error, setError] = useState<{ id: number; message: string }>({
    id: -1,
    message: "",
  });
  const [project, setProject] = useState<Project>({
    name: data?.projectName || "",
    link: data?.projectLink || "",
    descritpion: data?.projectDescription || "",
  });
  const [capInfo, setCapInfo] = useState<Info>({
    name: data?.name || "",
    email: data?.email || "",
    phone: data?.phone || "",
    job: data?.job || "",
  });

  useEffect(() => {
    setCapInfo({
      name: data?.name || "",
      email: data?.email || "",
      phone: data?.phone || "",
      job: data?.job || "",
    });
    setProject({
      name: data?.projectName || "",
      link: data?.projectLink || "",
      descritpion: data?.projectDescription || "",
    });
    setNumOfMem(data?.numOfMems || 1);
  }, [data]);

  const handleUpdate = () => {
    console.log("update");
  };

  const checkingData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const linkREgex =
      /^(https?:\/\/)?([\w\d\-]+\.){1,}[a-z]{2,}(:\d+)?(\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
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
    if (!linkREgex.test(project.link)) {
      setError({ id: 6, message: "Link is not valid" });
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

  const handleSubmit = async () => {
    const refactorMems = mems.map((mem) => ({
      name: mem.name || null,
      email: mem.email || null,
      phone: mem.phone || null,
      job: mem.job || null,
    }));
    if (checkingData()) {
      const res = await privateAxios
        .post("/contest/submit", {
          numberOfMembers: numOfMem,
          members: [capInfo, ...refactorMems.slice(0, numOfMem - 1)],
          field,
          contestName: project.name,
          link: project.link,
          description: project.descritpion,
        })
        .then((res) => {
          toast({
            title: "Nộp bài thành công",
            description: "Bài nộp của bạn đã được ghi nhận",
            variant: "success",
          });
          // router.push("/signup/thank-you");
        })
        .catch((e) => {
          console.log(e.response.data.message);
          alert("submit error");
        });
      console.log(res);

      console.log({
        numberOfMembers: numOfMem,
        members: [capInfo, ...refactorMems.slice(0, numOfMem - 1)],
        field,
        contestName: project.name,
        link: project.link,
        description: project.descritpion,
      });
    }
  };

  useEffect(() => {
    console.log(session.data?.user);
    if (!disable) {
      setCapInfo((prev) => ({
        ...prev,
        name: session.data?.user?.username || "",
        email: session.data?.user?.email || "",
        phone: session?.data?.user?.phone || "",
      }));
    }
  }, [session.data?.user]);
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex gap-5 justify-center flex-col bg-[#1b1b21] rounded-[10px] border-[1px] border-[#ffffff1a] p-8 sm:w-[1100px] w-[92%]">
        {view && (
          <div className="w-full flex justify-end">
            {disable ? (
              <span
                onClick={() => {
                  setDisable(false);
                }}
                className="cursor-pointer hover:scale-110 hover:transition-all hover:duration-200 hover:ease-linear"
              >
                <Pencil stroke="#358fce" />
              </span>
            ) : (
              <Button
                rounded={false}
                click={() => {
                  setDisable(true);
                }}
                size="sm"
              >
                Cancel
              </Button>
            )}
          </div>
        )}
        <div className="w-full ">
          {disable ? (
            <>
              <span className="block text-white mb-4 ">Lĩnh vực dự thi*</span>
              <span className="w-full block bg-field p-4 rounded-[10px]">{`linh vuc du thi`}</span>
            </>
          ) : (
            <Dropdown
              error={error.id == 0}
              onSelect={(option: string) => {
                setError({ id: -1, message: "" });
                setField(option);
              }}
              value={field}
              title="Lĩnh vực dự thi*"
            />
          )}
        </div>
        <div className="sm:w-[50%] w-[100%] text-left flex flex-col gap-5">
          <span className="text-white text-[19px] font-[500]">
            Thông tin đội thi
          </span>
          <InputField
            disabled={disable}
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
                disabled={disable}
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
                disabled={disable}
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
                disabled={disable}
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
                disabled={disable}
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
                      disabled={disable}
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
                      disabled={disable}
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
                      disabled={disable}
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
                      disabled={disable}
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
              disabled={disable}
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
              disabled={disable}
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
              disabled={disable}
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
        {!disable && (
          <div className="flex w-full sm:justify-start justify-center">
            {" "}
            {!view ? (
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
            ) : (
              <Button
                hover
                rounded={false}
                size="md"
                click={() => {
                  handleUpdate();
                }}
              >
                <span className="text-white block sm:px-[200px]">Cập nhật</span>
              </Button>
            )}
          </div>
        )}
      </div>
      {!view && (
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
      )}
    </div>
  );
}

export default SubmitForm;
