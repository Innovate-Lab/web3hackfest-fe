type Props = {
  disable?: boolean;
  src: string;
  index: number;
  title: string;
  period: string;
  tags: string[];
};
function Milestone(props: Props) {
  return (
    <div className="w-fit flex items-center justify-center flex-col">
      <div className="w-[280px] h-[280px] flex flex-col justify-center items-center ">
        <img
          className={`block w-[175px]  rounded-inherit object-center object-cover ${
            props.disable ? "" : "animate-wave-slow"
          } `}
          src={props.src}
          alt=""
        />
        <img
          srcSet="https://framerusercontent.com/images/ok8GBrHHTpTkQQvdj2GWsN8GX0.png 768w"
          src="https://framerusercontent.com/images/ok8GBrHHTpTkQQvdj2GWsN8GX0.png?scale-down-to=512"
          alt=""
          sizes="86px"
          className={`mt-[-24px]`}
        />
      </div>

      <div className="milestone-content p-6  w-[380px] min-h-[400px] rounded-[10px] bg-gradient-to-br from-[#00000066] to-[#1b1b21]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[19px] text-white block">
            Phase: {props.index + 1}
          </span>
          <span className=" text-[24px] text-white font-[500] block">
            {props.title}
          </span>
          <span className="text-disable text-[17px] font-[500]">
            {props.period}
          </span>
        </div>
        <div className="flex flex-wrap gap-[10px] justify-center mt-8">
          {props.tags.map((item, index) => (
            <span
              className="text-disable font-[400] text-[17px] px-[14px] py-2 bg-[#1b1b21] rounded-[10px] border-[1px] border-[#ffffff1a]"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Milestone;
