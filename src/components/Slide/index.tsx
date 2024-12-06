import LoadOnScreen from "../LoadOnScreen";

type Props = {
  children: React.ReactNode;
  bottomSpace?: boolean;
  title: string;
};

function Slide(props: Props) {
  return (
    <div className={`slide relative  ${!props.bottomSpace && "pb-[150px]"} `}>
      <div
        style={{
          backgroundImage:
            "radial-gradient(closest-side, #072a53 10%, rgba(0,0,0,0) 90%)",
          backgroundSize: "1400px 800px",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full content-wrapper  flex flex-col items-center pt-10 gap-10 z-[101] flex-shrink-0"
      >
        <LoadOnScreen popup={false}>
          <span
            className={`text-[48px] font-[600] text-white w-full text-center block pb-4`}
          >
            {props.title}
          </span>
        </LoadOnScreen>

        <div className="flex gap-4 justify-center w-full px-4 flex-wrap">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Slide;
