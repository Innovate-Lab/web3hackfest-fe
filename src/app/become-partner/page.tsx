"use client";
import Button from "@/components/Button";
import PartnerForm from "@/layout/components/Partner";
import SpeakerForm from "@/layout/components/SpearkerForm";
import { MoveRight } from "lucide-react";
type PartnerData = {
  name: string;
  company: string;
  position: string;
  email: string;
  telegram: string;
  expertise: string[];
  moreInfo: string;
  interest: string;
  previousSpeakingEngagements: string;
  deliveredSpeech: string;
};
function BecomePartner() {
  const logged = false;

  return (
    <div className="pt-[80px]">
      <div className="w-full flex justify-center flex-col items-center gap-8">
        <span className="text-white text-[40px] font-[500]">
          Trở thành diễn giả
        </span>
        <SpeakerForm />
        <PartnerForm />
      </div>
    </div>
  );
}

export default BecomePartner;
