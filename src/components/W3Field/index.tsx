import Button from "../Button";
import { MoveRight } from "lucide-react";

interface Props {
  title: string;
  children: React.ReactNode;
  button: {
    title: string;
    click: () => void;
  };
}
function W3Field(props: Props) {
  return (
    <>
      <span className="text-white text-[28px] sm:text-[36px] font-[500] text-center px-4 sm:px-0">
        {props.title}
      </span>

      {props.children}
      <Button hover={true} rounded={false} size="sm" click={props.button.click}>
        <div className="flex gap-2">
          <span className=" text-white">{props.button.title}</span>
          <MoveRight className="" stroke="#fff" />
        </div>
      </Button>
    </>
  );
}

export default W3Field;
