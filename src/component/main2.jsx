const Card_2 = (props) => {
    return(
        <div className=" lg :w-[30%] dark:text-[#fff] lg:flex py-[40px] flex-wrap justify-between mx-auto ">
            <div className=" ">
            <img className=" mx-auto pt-[10px] pb-[30px]" src={props.img} alt="" />
            <h1 className=" text-center dark:text-[#fff]  mx-auto text-[18px] font-[500] text-[#212B31] py-[15px]  ">
            {props.text_h}
            </h1>
            <p className="xl:w-[75%] text-center 2xl:w-[65%] lg:w-[50%] md:w-[40%] sm:w-[60%] mx:w-[70%] text-[16px] font-[400] mx-auto leading-[150%]">{props.text_p}</p>
            </div>
        </div>
    )
};
export default Card_2;