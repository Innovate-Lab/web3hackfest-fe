import HeadignButton from "@/components/HeadingButton";
import { DataContext, DataProvider, useDataContext } from "@/provider/DataContext";
import { title } from "process";
import { useContext, useEffect } from "react";
import { MoveRight } from "lucide-react";
const pages = [
    {
        title: "Home",
        to: '/'
    }, {
        title: "Ideathon",
        to: '/ideathon'
    },{
        title: "Hackathon",
        to: '/hackathon'
    },{
        title: "Schedule",
        to: '/schedule'
    },{
        title: "Blog",
        to: '/blog'
    },{
        title: "Partners",
        to: '/partners'
    },{
        title: "About us",
        to: '/about'
    }
  ]

function Heading() {
    const {activePage, setActivePage} = useDataContext();
    useEffect(() => {
        setActivePage(parseInt(localStorage.getItem('activePage') || '0'));
    }, [])
    const handlePageChange = (index: number) => {
        localStorage.setItem('activePage', index.toString());
        setActivePage(index);
    }
    return ( <div className="flex justify-between items-center p-10 bg-secondary border-b-[2px] border-[#ffffff42] border-solid">
        <div className="logo-wrapper">

            <span className="text-[18px] font-[600] text-white uppercase">Web3</span>
            <span className="text-[18px] text-white uppercase">hackfest</span>
        </div>

        <div className="menu-wrapper flex">
            {pages.map((page, index) => 
            <HeadignButton key={index} text={page.title} to={page.to} active={activePage ===  index} click={() => {
                handlePageChange(index);
            }} />
            )}
        </div>

        <div className="user-actions-wrapper">
            <div className="px-4 py-[10px] bg-primary text-white rounded-[100px] gap-2 flex cursor-pointer">
                Đăng nhập
                <MoveRight className="" stroke="#fff" />
            </div>
        </div>


    </div> );
}

export default Heading;