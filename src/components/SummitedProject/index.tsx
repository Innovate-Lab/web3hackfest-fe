"use client";
import { Contest } from "@/app/profile/page";
import SubmitForm from "@/layout/components/SubmitForm";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { useState } from "react";

function SummitedProject({ contest }: { contest: Contest }) {
  const [show, setShow] = useState(false);
  return (
    <div className="py-4 sm:w-[1100px] w-[92%]">
      <div
        onClick={() => setShow(!show)}
        className="flex  justify-between p-4 cursor-pointer bg-secondary rounded-[10px]"
      >
        <span className="text-white text-[18px] font-[500] ">
          {contest.projectName}
        </span>

        <span className="">
          {show ? <ChevronDown stroke="#fff" /> : <ChevronLeft />}
        </span>
      </div>
      {show && <SubmitForm data={contest} view={true} />}
    </div>
  );
}

export default SummitedProject;
