
import SigninForm from "@/components/signin/SigninForm";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col gap-8">
        <div className="text-white text-[45px] text-center">Đăng nhập</div>
        <SigninForm />
      </div>
    </Suspense>
  );
};

export default Page;
