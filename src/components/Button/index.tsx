type Props = {
  click: () => void;
  rounded: boolean;
  size: "sm" | "md";
  hover?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
};

function Button(props: Props) {
  return (
    <div
      className={`w-fit ${
        props.rounded ? "rounded-[100px]" : "rounded-[10px]"
      } ${
        props.size == "sm" ? "px-[16px] py-[10px]" : "px-[20px] py-[14px]"
      }  cursor-pointer ${
        !props.reverse ? "bg-primary" : "bg-[rgba(45,45,56)]"
      } ${
        props.hover
          ? `hover:transition-all duration-200 ease-in ${
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
