type Props = {
  disable?: boolean;
  src: string;
};
function Milestone(props: Props) {
  return (
    <div className="w-fit">
      <div className="w-[280px] h-[280px] flex flex-col justify-center items-center ">
        <img
          className={`block w-[175px]  rounded-inherit object-center object-cover ${
            props.disable ? "" : "animate-wave-slow"
          } `}
          src={props.src}
          alt=""
        />
        <img
          srcSet="https://framerusercontent.com/images/ok8GBrHHTpTkQQvdj2GWsN8GX0.png 768w"
          src="https://framerusercontent.com/images/ok8GBrHHTpTkQQvdj2GWsN8GX0.png?scale-down-to=512"
          alt=""
          sizes="86px"
          className={`mt-[-24px]`}
        />
      </div>

      <div className="milestone-content"></div>
    </div>
  );
}

export default Milestone;
