interface Props {
  title: string;
  image: string;
}
function EventCard(props: Props) {
  return (
    <div className="sm:w-[22%] w-[47%] h-[112px] sm:h-[256px] rounded-[10px] relative overflow-hidden">
      <div className="image-wrapper absolute w-full h-full left-0 right-0 top-0 bottom-0 object-cover object-center z-[101]">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          {/* <img src={props.image} alt="" className="w-full h-full" /> */}
        </div>
      </div>
      <div className="absolute bottom-0 h-full w-full left-0 right-0 bg-gradient-to-t from-[#000000db] to-transparent z-[102]"></div>
      <span
        style={{ zIndex: "103" }}
        className="text-white text-[14px] sm:text-[18px] bottom-[12px] left-[14px] absolute z-[103] font-[500] block"
      >
        {props.title}
      </span>
    </div>
  );
}

export default EventCard;
