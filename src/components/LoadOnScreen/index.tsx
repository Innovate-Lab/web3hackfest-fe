import { useScroll, motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  popup: boolean;
};

function LoadOnScreen(props: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(container);

  return (
    <>
      <motion.span
        ref={container}
        className={`text-[48px] w-full  opacity-0 font-[600] text-white
        ${
          props.popup
            ? `
        ${
          isInView
            ? `transition-all ease-out duration-700 translate-y-[0]`
            : `translate-y-[40px]`
        }
        `
            : ``
        } 
        ${
          isInView
            ? `transition-all easin duration-700 opacity-100 ${
                props.popup ? "translate-y-[0]" : ""
              }`
            : ""
        }`}
      >
        {props.children}
      </motion.span>
    </>
  );
}

export default LoadOnScreen;
