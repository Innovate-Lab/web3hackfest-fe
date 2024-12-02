import HeadignButton from "@/components/HeadingButton";
import {
  DataContext,
  DataProvider,
  useDataContext,
} from "@/provider/DataContext";
import { title } from "process";
import { useContext, useEffect } from "react";
import { MoveRight } from "lucide-react";
import Button from "@/components/Button";
const pages = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Ideathon",
    to: "/ideathon",
  },
  {
    title: "Hackathon",
    to: "/hackathon",
  },
  {
    title: "Schedule",
    to: "/schedule",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Partners",
    to: "/partners",
  },
  {
    title: "About us",
    to: "/about",
  },
];

function Heading() {
  const { activePage, setActivePage } = useDataContext();
  useEffect(() => {
    setActivePage(parseInt(localStorage.getItem("activePage") || "0"));
  }, []);
  const handlePageChange = (index: number) => {
    localStorage.setItem("activePage", index.toString());
    setActivePage(index);
  };
  return (
    <div className=" relative z-10 flex justify-between items-center px-10 py-[30px] bg-secondary border-b-[2px] border-[#ffffff42] border-solid">
      <div className="logo-wrapper">
        <span className="text-[18px] font-[600] text-white uppercase">
          Web3
        </span>
        <span className="text-[18px] text-white uppercase">hackfest</span>
      </div>

      <div className="menu-wrapper flex">
        {pages.map((page, index) => (
          <HeadignButton
            key={index}
            text={page.title}
            to={page.to}
            active={activePage === index}
            click={() => {
              handlePageChange(index);
            }}
          />
        ))}
      </div>

      <div className="user-actions-wrapper">
        <Button size="sm" rounded={true} click={() => {}}>
          <div className="flex gap-2">
            <span className=" text-white">Đăng nhập</span>
            <MoveRight className="" stroke="#fff" />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Heading;
