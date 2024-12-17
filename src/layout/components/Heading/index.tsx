"use client";
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
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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
  const router = useRouter();
  const { data: session } = useSession();

  const { activePage, setActivePage } = useDataContext();
  useEffect(() => {
    setActivePage(parseInt(localStorage.getItem("activePage") || "0"));
  }, []);
  const handlePageChange = (index: number) => {
    localStorage.setItem("activePage", index.toString());
    setActivePage(index);
  };
  return (
    <div className="fixed  w-full z-[999] bg-black flex justify-between items-center p-[24px] sm:px-10 sm:py-[30px] bg-secondary border-b-[2px] border-[#ffffff42] border-solid ">
      <div className="logo-wrapper">
        {/* <img
          className="w-[160px] h-auto"
          src="assets/images/w3fs.avif"
          alt=""
        /> */}
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
        {/* {logged} */}
        {session ?  (
        <img
          className="text-white h-auto w-8"
          src="/icon/person.png"
          
          onClick={() => {
            router.push("/profile");
          }}
        >
          
        </img>
      ): (
          <Button
            size="sm"
            rounded={true}
            click={() => {
              router.push("/signin");
              // setLogged(true);
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
