import LoadOnScreen from "../LoadOnScreen";

type Props = {
  children: React.ReactNode;
  bottomSpace?: boolean;
  title: string;
  shappe?: "square" | "circle";
  full?: boolean;
  opacity?: "s" | "m";
  bkg: boolean;
  possition?: "l" | "r";
  hFull?: boolean;
};

function Slide(props: Props) {
  return (
    <div
      className={`slide relative   z-[0]  ${
        !props.bottomSpace && "pb-[80px] sm:pb-[150px]"
      } `}
    >
      {props.bkg && (
        <div
          className={`absolute top-0 left-0 w-full h-full flex  items-center z-[-1]
          ${
            props.possition
              ? props.possition == "l"
                ? "justify-start"
                : "justify-end"
              : "justify-center"
          }
            `}
        >
          <div
            className={`bg-[#18559c]  z-[0]  blur-3xl 
            ${props.hFull ? "h-[80%]" : "h-[40%]"}
            ${props.full ? "w-full" : "w-[60%]"}
            ${props.shappe && props.shappe == "square" ? "" : "rounded-[50%]"}
            ${props.opacity == "s" ? "opacity-[0.4]" : "opacity-[0.8]"}  

            `}
          ></div>
        </div>
      )}
      <div
        className={`w-full content-wrapper  flex flex-col items-center pt-10 gap-10 flex-shrink-0 `}
      >
        <LoadOnScreen popup={false}>
          <span
            className={`text-title px-10 sm:px-0 font-[600] text-white w-full text-center block pb-4`}
          >
            {props.title}
          </span>
        </LoadOnScreen>

        <div className="flex gap-4 justify-center w-pageContent flex-wrap">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Slide;
