'use client'
import { useRouter } from "next/navigation";


interface Props {
    text: string;
    click: () => void;
    active: boolean;
    to: string;
}
function HeadignButton(props: Props) {
    const router = useRouter();
    return ( <div className={`headingButtonWrapper flex justify-center items-center px-4 py-2 cursor-pointer ${props.active? 'border-b-[3px]': ''}  border-secondary rounded-t-lg`}
        onClick={() => {
            
            props.click()
        
            router.push(props.to)
        }}
    >
        <span className={`duration-200 hover:text-white hover:transition-all hover:duration-200 hover:scale-110 hover:ease-in font-[400] text-[18px] ${props.active? 'text-white scale-110': 'text-[#646467] active:duration-100 active:scale-100'} font-[500]`}>
            {props.text}
        </span>
    </div> );
}

export default HeadignButton;