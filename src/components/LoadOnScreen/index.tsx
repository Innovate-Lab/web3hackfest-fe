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
        className={`text-[48px] w-full ${
          props.popup ? "translate-y-[40px]" : ""
        } opacity-0 font-[600] text-white ${
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
