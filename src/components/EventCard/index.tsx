import { image } from "motion/react-client";
import LoadOnScreen from "../LoadOnScreen";

interface Props {
  title: string;
  image: string;
}
function EventCard(props: Props) {
  return (
    <div className="w-[22%] h-[256px] rounded-[10px] relative overflow-hidden">
      <div className="image-wrapper absolute w-full h-full left-0 right-0 top-0 bottom-0 object-cover object-center z-[101]">
        <img src={props.image} alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 h-full w-full left-0 right-0 bg-[#0000002b] z-[102]"></div>
      <span
        style={{ zIndex: "103" }}
        className="text-white text-[18px] bottom-[12px] left-[14px] absolute z-[103] font-[500] block"
      >
        {props.title}
      </span>
    </div>
  );
}

export default EventCard;
