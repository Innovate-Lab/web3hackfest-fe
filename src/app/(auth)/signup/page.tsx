import Signup from "@/components/Signup";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Signup />;
    </Suspense>
  );
};

export default Page;
