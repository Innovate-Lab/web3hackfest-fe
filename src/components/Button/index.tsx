type Props = {
    click: () => void;
    rounded: boolean;
    size: 'sm' | 'md';
    children: React.ReactNode;
}

function Button(props: Props) {
    return ( <div className={`${props.rounded? 'rounded-[100px]': 'rounded-[10px]'} ${props.size == 'sm' ? 'px-[16px] py-[10px]': 'px-[20px] py-[14px]'}  cursor-pointer bg-primary`}>
        {props.children}
    </div> );
}

export default Button;