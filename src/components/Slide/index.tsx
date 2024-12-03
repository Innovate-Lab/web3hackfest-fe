import LoadOnScreen from "../LoadOnScreen";

type Props = {
  children: React.ReactNode;
  title: string;
};

function Slide(props: Props) {
  return (
    <div className="slide relative">
      <div className="w-full content-wrapper absolute flex flex-col items-center pt-10 pb-[150px] gap-10 z-[101]">
        <LoadOnScreen popup={false}>
          <span
            className={`text-[48px] font-[600] text-white w-full text-center block`}
          >
            {props.title}
          </span>
        </LoadOnScreen>

        <div className="flex gap-4 justify-center  px-4 flex-wrap">
          {props.children}
        </div>
      </div>
      <div className="background  top-0 z-[100]">
        <div className="flex justify-center translate-y-[68px] ">
          <div
            className="  w-[1200px] h-[800px]"
            style={{
              backgroundImage:
                "radial-gradient(closest-side, #072a53 10%, rgba(0,0,0,0) 90%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
