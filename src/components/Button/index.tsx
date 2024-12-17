type Props = {
  click: () => void;
  rounded: boolean;
  size: "sm" | "md";
  hover?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
  full?: boolean;
};

function Button(props: Props) {
  return (
    <div
      onClick={props.click}
      className={` transition-all duration-200 ease-in 
        active:scale-95 active:transition-all active:duration-200 active:ease-out

      ${props.full ? "w-full" : "w-fit"}
        ${
          props.rounded ? "sm:rounded-[100px] rounded-[10px]" : "rounded-[10px]"
        } ${
        props.size == "sm" ? "px-[16px] py-[10px]" : "px-[20px] py-[14px]"
      }  cursor-pointer ${
        !props.reverse ? "bg-primary" : "bg-[rgba(45,45,56)]"
      } ${
        props.hover
          ? `hover:transition-all duration-300 ease-in ${
              props.reverse ? "hover:bg-primary" : "hover:bg-[rgba(45,45,56)]"
            }`
          : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default Button;
