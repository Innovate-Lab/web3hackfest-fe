"use client";

import Button from "@/components/Button";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

function Ideathon() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="py-10 gap-5 frist-slide  flex flex-col items-center justify-center w-full bg-black">
        <div className="custom-bg-image absolute w-full">
          <div className="gb-resource">
            <img
              className="w-[100vw] h-[200px]"
              src="https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=512 512w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png 3820w"
              alt=""
            />
          </div>
          {/* background circle  */}
          <div className="w-full flex justify-center ">
            <div
              className="  w-[1600px] h-[1400px]  translate-y-[-22%]"
              style={{
                backgroundImage:
                  "radial-gradient(closest-side, #072a53, rgba(0,0,0,0))",
              }}
            ></div>
          </div>
        </div>

        <div className="w-[274px] h-[256px] animate-wave-slow">
          <img
            className=""
            src="https://framerusercontent.com/images/fzZxjr0sL5OidKQmPNpmC15o6Y.png"
            alt=""
            style={{ objectPosition: "49% 65.7%", objectFit: "cover" }}
          />
        </div>

        <div className="main-content-wrapper justify-center relative z-30 flex flex-col items-center gap-5 w-[70%]">
          <span className="block overflow-hidden h-[120px] text-[100px] font-[800] text-white">
            <span
              className={`text-center transition-all  opacity-0 block  ease-in-out ${
                loaded
                  ? "translate-y-[0] duration-700 opacity-100"
                  : "translate-y-[100px] opacity-0"
              }`}
            >
              {/* image */}
              WEB3 & AI IDEATHON
            </span>
          </span>

          <span className="uppercase text-white text-[24px] font-[600]">
            Cuộc thi toàn quốc về ý tưởng công nghệ AI & Web3
          </span>

          <span className="text-white text-center text-[17px] font-[500]">
            Web3 HackFest 2025 mở màn với cuộc thi về ý tưởng - Web3 & AI
            Ideathon đầy hứng khởi! Bạn và đội của mình sẽ sẽ có cơ hội trình
            bày những ý tưởng sáng tạo về việc ứng dụng AI và Web3 để giải quyết
            các vấn đề thực tiễn, kiến tạo tương lai số.
          </span>

          <div className="flex gap-4">
            <Button hover rounded={false} size="md" click={() => {}}>
              <div className="flex gap-2">
                <span className="text-[18px] font-[500] text-white">
                  Đăng ký ngay
                </span>
                <MoveRight className="" stroke="#fff" />
              </div>
            </Button>
            <Button hover reverse rounded={false} size="md" click={() => {}}>
              <div className="flex gap-2">
                <span className="text-[18px] font-[500] text-white">
                  Thể kệ và hướng dẫn
                </span>
                <MoveRight className="" stroke="#fff" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ideathon;
