import { useState, useEffect, useRef } from "react";

interface Props {
  iconUrl: string;
}
function RotateICon(props: Props) {
  const [deg, setDeg] = useState<number>(0);
  const refInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    refInterval.current = setInterval(() => {
      setDeg((prev) => prev + 1);
    }, 4000 / 360);
    return () => {
      clearInterval(refInterval.current as NodeJS.Timeout);
    };
  }, []);
  return (
    <div
      className="text-[#17171b] w-[84px] h-[84px] flex items-center justify-center  rounded-[15px]"
      style={{
        backgroundImage: `linear-gradient(${deg}deg, #101013, #000)`,
      }}
    >
      <div className="w-[80px] flex items-center justify-center h-[80px] rounded-[15px] bg-black">
        <div className="w-[68px] h-[68px] rounded-[12px] flex items-center justify-center border-[#17171b] border-[2px]">
          <img className="w-[40px] h-[40px]" src={props.iconUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RotateICon;
