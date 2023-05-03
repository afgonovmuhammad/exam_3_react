const Card_6 = (props) => {
    return(
        <div className=" lg:w-[30%] md:w-[50%] mx:w-[60%] py-[40px] flex-wrap justify-between mx-auto ">
        <div className=" flex gap-[30px] ">
          <div className="lg:w-[40%] 2xl:w-[20%] mx:w-[40%] pt-[10px]">
          <img className="  pt-[10px] pb-[30px]" src={props.img} alt="" />
          </div>
            <div className="">
            <h1 className="  lg:text-start  mx-auto text-[18px] font-[500] dark:text-[#fff] text-[#212B31] py-[15px]  ">
            {props.text_h}
            </h1>
            <p className="  lg:text-start  text-[16px] dark:text-[#fff] font-[400] mx-auto leading-[150%]">{props.text_p}</p>
            </div>
        </div>
        </div>
    )
};
export default Card_6;