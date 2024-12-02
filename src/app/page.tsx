import Button from "@/components/Button";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="pt-10 frist-slide h-[80vh] flex flex-col items-center justify-center w-full">
        <div className="custom-bg-image absolute w-full">
          <div className="gb-resource">
            <img
              className="w-[100vw] h-[200px]"
              srcSet="https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=512 512w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/a8w48ATaQJ9c1bcfNf3bfs1nRps.png 3820w"
              alt=""
            />
          </div>

          <div className="w-full flex justify-center px-[200px]">
            <div
              className="  w-[1600px] h-[1600px]  translate-y-[-10%]"
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
            src="https://framerusercontent.com/images/l6DoV80yKM4kCaJFEXrySkz9c2I.png"
            alt=""
            style={{ objectPosition: "49% 65.7%", objectFit: "cover" }}
          />
        </div>

        <div className="main-content-wrapper justify-center relative z-30 flex flex-col items-center gap-5 w-[70%]">
          <span className="block h-[120px] text-[100px] font-[800] text-white">
            {/* image */}
            W3HF'25
          </span>

          <span className="uppercase text-white text-[24px] font-[600]">
            A.I CONVERGENCE
          </span>

          <span className="text-[#94969d] text-center text-[17px]">
            W3HF’25: Web3 & AI Convergence: Hội nghị AI và Web3 lớn nhất Đông
            Nam Á, nơi quy tụ những nhà đổi mới, nhà sáng lập và người kiến tạo
            để khám phá và vượt qua giới hạn của công nghệ AI, Web3 cùng sự giao
            thoa đột phá giữa chúng.
          </span>

          <Button rounded={false} size="md" click={() => {}}>
            <div className="flex gap-2">
              <span className="text-[18px] font-[500] text-white">
                Đăng ký ngay
              </span>
              <MoveRight className="" stroke="#fff" />
            </div>
          </Button>
        </div>
      </div>

      <div className="second-slide-wrapper pt-[100px] flex flex-col items-center relative z-100">
        <div className="front-glass w-full flex flex-col items-center">
          <div className="w-[80px] flex items-center justify-center h-[80px] rounded-[15px] bg-black">
            <div className="bg-[#0b0b0d] w-[68px] h-[68px] rounded-[12px] flex items-center justify-center border-[#17171b] border-[1px]">
              <img
                className="w-[40px] h-[40px]"
                src="https://framerusercontent.com/images/OzMurPLi1kCizdhiVFLelcVFZf4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
