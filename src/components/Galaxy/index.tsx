import { useEffect, useRef, useState } from "react";
import fGalaxy from "../../../public/assets/images/galaxy/galaxy1.svg";
import sGalaxy from "../../../public/assets/images/galaxy/galaxy1.svg";
import tGalaxy from "../../../public/assets/images/galaxy/galaxy1.svg";
import foGalaxy from "../../../public/assets/images/galaxy/galaxy1.svg";
const srcSets = [
  "https://framerusercontent.com/images/0ufeneiW2NUlEhrhtdq3rbCEoc.svg?scale-down-to=512 512w,https://framerusercontent.com/images/0ufeneiW2NUlEhrhtdq3rbCEoc.svg 606w",
  "https://framerusercontent.com/images/Jff30AAWnFjT5Sao96znjDkVt40.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Jff30AAWnFjT5Sao96znjDkVt40.svg 606w",
  "https://framerusercontent.com/images/VGH8qwzpTb6cLdOoMcRz5M7zmlU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/VGH8qwzpTb6cLdOoMcRz5M7zmlU.svg 605w",
  "https://framerusercontent.com/images/lWjDzluNRQCuBYgd0XDoVtGMpw.svg?scale-down-to=512 512w,https://framerusercontent.com/images/lWjDzluNRQCuBYgd0XDoVtGMpw.svg 606w",
];

function Galaxy() {
  const images = [fGalaxy, sGalaxy, tGalaxy, foGalaxy];
  const [activeImage, setActiveImage] = useState<number>(0);
  const changeImageRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    changeImageRef.current = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => {
      clearInterval(changeImageRef.current as NodeJS.Timeout);
    };
  }, []);
  //   const [stars, setStars] = useState(1000);
  return (
    <div className="galaxy-wrapper">
      {srcSets.map((srcSet, index) => (
        <span key={index}>
          {index == activeImage && (
            <img
              sizes="40vw"
              srcSet={srcSet}
              alt="img"
              src="https://framerusercontent.com/images/lWjDzluNRQCuBYgd0XDoVtGMpw.svg"
            />
          )}
        </span>
      ))}
    </div>
  );
}

export default Galaxy;
