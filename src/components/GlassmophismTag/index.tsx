type Props = {
  children: React.ReactNode;
  icon?: string;
  size?: "s" | "m";
};

function GlassmophismTag(props: Props) {
  return (
    <div
      className={`px-5 py-6 border-[1px] border-[#ffffff26] rounded-[16px] bg-[#4e4e4e33] flex flex-col items-center w-full min-h-[160px]`}
    >
      <span className="w-[44px]">
        {props.icon && <img sizes="" src={props.icon} alt="" />}
      </span>
      {props.children}
    </div>
  );
}

export default GlassmophismTag;
