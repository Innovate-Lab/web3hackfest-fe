import SigninForm from "@/components/signin/SigninForm";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col gap-4 sm:gap-8 sm:w-fit w-[92%]">
        <div className="text-white text-[24px]  sm:text-[45px] text-center">
          Đăng nhập
        </div>
        <div className="w-full sm:w-fit">
          <SigninForm />
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
