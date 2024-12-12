import HeadignButton from "@/components/HeadingButton";
import {
  DataContext,
  DataProvider,
  useDataContext,
} from "@/provider/DataContext";
import { title } from "process";
import { useContext, useEffect, useState } from "react";
import { AlignJustify, MoveRight } from "lucide-react";
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
  const [logged, setLogged] = useState(false);
  const { activePage, setActivePage } = useDataContext();
  useEffect(() => {
    setActivePage(parseInt(localStorage.getItem("activePage") || "0"));
  }, []);
  const handlePageChange = (index: number) => {
    localStorage.setItem("activePage", index.toString());
    setActivePage(index);
  };
  return (
    <div className="fixed  w-full z-[999] flex justify-between items-center p-[24px] sm:px-10 sm:py-[30px] bg-secondary border-b-[2px] border-[#ffffff42] border-solid ">
      <div className="logo-wrapper">
        <img
          className="w-[160px] h-auto"
          src="assets/images/w3fs.avif"
          alt=""
        />
      </div>

      <div className="menu-wrapper sm:flex hidden">
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
        {logged}
        {logged ? (
          <div className="">
            {/* handle show option button or user avatar */}
            <div className="sm:hidden block">
              <AlignJustify stroke="#fff" />
            </div>
            <div className="sm:flex hidden items-center gap-4 cursor-pointer">
              <span className="text-white text-[17px] font-[500]">
                suistark02
              </span>
              <div
                className="w-[44px] h-[44px] rounded-[50%] bg-cover bg-center  border-[1px] border-primary"
                style={{
                  backgroundImage: `url('assets/images/persons/openart-image_Jyj2md-t_1726731886987_raw.jpg')`,
                }}
              ></div>
            </div>
          </div>
        ) : (
          <Button
            size="sm"
            rounded={true}
            click={() => {
              setLogged(true);
            }}
          >
            <div className="flex gap-2">
              <span className=" text-white">Đăng nhập</span>
              <span>
                <MoveRight className="sm:inline-block hidden" stroke="#fff" />
              </span>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Heading;
