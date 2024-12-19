"use client";
import Button from "@/components/Button";
import SubmitForm from "@/layout/components/SubmitForm";
import { MoveRight } from "lucide-react";
import { useSession } from "next-auth/react";
function Submit() {
  const logged = false;
  const {data: session, status} = useSession()
  return (
    <div className="pt-[80px]">
      <div className="w-full flex justify-center flex-col items-center gap-8">
        <span className="text-white text-[40px]">Nộp bài dự thi </span>
        <span className="block overflow-hidden  text-[32px] sm:text-[58px] font-[800] text-white">
          <span className={`transition-all  block  ease-in-out text-center `}>
            {/* image */}
            WEB3 & AI IDEATHON
          </span>
        </span>
        <span className="text-white text-[14px] text-center block max-w-[50%]">
          Xem thể lệ và hướng dẫn tham gia cuộc thi
        </span>
        <Button rounded={false} size="md" click={() => {}}>
          <div className="flex gap-2">
            <span className="text-[18px] font-[500] text-white">
              {status ==="authenticated"? "Nộp bài ngay" : "Đăng kí ngay"}
            </span>
            <MoveRight className="" stroke="#fff" />
          </div>
        </Button>
        <SubmitForm />
      </div>
    </div>
  );
}

export default Submit;
