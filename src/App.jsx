import { useState,useTransition } from 'react' 
// import { useState } from 'react'

import './App.css'
import Temporary from './component/navbar';
// import Swiper from './component/Swiper11';



import Card_2 from './component/main2';
import Card_8 from './component/main8';
import Card_6 from './component/main_5';
import Card_7 from './component/main7';



// import imgs
import nav from './assets/nav.png'
import main1 from './assets/main1.png'
import main3 from './assets/main3.png'
import main4 from './assets/main4.png'
import main5 from './assets/main5.png'
import main5A from './assets/main5A.png'
import main5B from './assets/main5B.png'
import main1A from './assets/main1A.png'
import main8 from './assets/main8.png'
import main9 from './assets/main9.png'
import main10 from './assets/main10.png'
import ma1 from './assets/ma1.png'
import ma2 from './assets/ma2.png'
import ma3 from './assets/ma3.png'
import maa1 from './assets/maa1.png'
import maa2 from './assets/maa2.png'
import maa3 from './assets/maa3.png'
import maa4 from './assets/maa4.png'
import maa5 from './assets/maa5.png'
import maa6 from './assets/maa6.png'

import a1 from './assets/a1.png'
import a2 from './assets/a2.png'
import a3 from './assets/a3.png'
import a4 from './assets/a4.png'
// import a5 from './assets/a5.png'
import a6 from './assets/a6.png'
import a7 from './assets/a7.png'
import a8 from './assets/a8.png'
import a9 from './assets/a9.png'

import da1 from './assets/da1.png'
import da2 from './assets/da2.png'
import da3 from './assets/da3.png'
import da4 from './assets/da4.png'

import aa1 from './assets/aa1.png'
import aa2 from './assets/aa2.png'
import aa3 from './assets/aa3.png'
import aa4 from './assets/aa4.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import React,{useEffect} from 'react'
import Switcher from './component/Switcher';

import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Swiper1 from './component/swiper11';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  const handleChange = (e) => {
    const {value} = e.target
    changeLanguage(value)
    setLng(value)
  }
  let users_2 = [
    {
        id:1,
        img:ma1,
        text_h:t("text7A"),
        text_p:t("text8"),
    },

    {
        id:2,
        img:ma2,
        text_h:t("text7A1"),
        text_p:t("text81"),
    },

    {
        id:3,
        img:ma3,
        text_h:t("text7A2"),
        text_p:t("text82"),
    },


 ]
 let users_6 = [
  {
      id:1,
      img:a1,
      text_h:t("text15"),
      text_p:t("text16"),
  },

  {
      id:2,
      img:a2,
      text_h:t("text15A"),
      text_p:t("text16"),
  },

  {
      id:3,
      img:a3,
      text_h:t("text15B"),
      text_p:t("text16"),
  },

  {
    id:4,
    img:a4,
    text_h:t("text15C"),
    text_p:t("text16"),
},

{
    id:5,
    img:a1,
    text_h:t("text15D"),
    text_p:t("text16"),
},

{
    id:6,
    img:a6,
    text_h:t("text15I"),
    text_p:t("text16"),
},

{
  id:7,
  img:a7,
  text_h:t("text15F"),
  text_p:t("text16"),
},

{
  id:8,
  img:a8,
  text_h:t("text15G"),
  text_p:t("text16"),
},

{
  id:9,
  img:a9,
  text_h:t("text15H"),
  text_p:t("text16"),
},
]
let users_7 = [
  {
      id:1,
      img:aa1,
      text_h:t("text18"),
      text_p:t("text19"),
  },

  {
      id:2,
      img:aa2,
      text_h:t("text18A"),
      text_p:t("text19A"),
  },

  {
      id:3,
      img:aa3,
      text_h:t("text18B"),
      text_p:t("text19B"),
  },


]



  return (
    <div className=' dark:bg-[#4f4545] bg-white'>

      <div className="main_1 ">
        <div className="contener w-[95%] mx-auto">
          <div className="navbar flex justify-between py-[20px]">
            <div className='flex gap-[20px]' data-aos="zoom-out-up"  data-aos-duration="3000">
              <div  >
                <img src={nav} alt="" />
              </div>
              <p className='text-[#212B31] dark:text-[#ffff] sm:flex hidden py-[5px] text-[24px] font-[400]'>{t("text1")}</p>
            </div>

            <ul className='lg:flex expand justify-between dark:text-[white] hidden xl:w-[55%] font-[500] py-[10px] text-[20px] text-[#303d43]'>
              <li className='hover:text-[#fff] hover:bg-[#434343] py-[3px] px-[15px] rounded-[10px]'><a href="#">{t("text1A")}</a></li>
              <li className='hover:text-[#fff] hover:bg-[#434343] py-[3px] px-[15px] rounded-[10px]'><a href="#">{t("text2")}</a></li>
              <li className='hover:text-[#fff] hover:bg-[#434343] py-[3px] px-[15px] rounded-[10px]'><a href="#">{t("text3")}</a></li>
              <li className='hover:text-[#fff]  hover:bg-[#434343] py-[3px] px-[15px] rounded-[10px]'><a href="#">{t("text4")}</a></li>
              <li className='hover:text-[#fff] 2xl:flex hidden hover:bg-[#434343] py-[3px] px-[15px] rounded-[10px]'><a href="#">{t("text5")}</a></li>
              <li className='hover:text-[#fff] 2xl:flex hidden hover:bg-[#434343] py-[3px] px-[15px] rounded-[10px]'><a href="#">{t("text6")}</a></li>
              <li className='hover:text-[#fff] 2xl:flex hidden hover:bg-[#434343] py-[3px] px-[15px] rounded-[10px]'><a href="#">{t("text7")}</a></li>
            </ul>

            
            <div className='flex gap-[40px] items-center'>
            <select className='text-[20px] font-[500] dark:bg-[black] dark:text-[white]' value={lng} onChange={handleChange}>
                  <option value={"en"}>En </option>
                  <option value={"ru"}>Ru </option>
                  
          </select>
          <Switcher/>
          <button className='btn_1 text-[#fff]  lg:flex dark:hover:bg-[#2c7fb3] hidden bg-[#212B31] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7")}</button>
          <div className='mx:flex lg:hidden pt-[10px]'>
                <Temporary />
              </div>
            </div>
          </div>

          <div className="main_1A py-[50px]">
            <h1 className='lg:text-[50px] md:text-[40px] text-[30px] xl:w-[50%] mx:w-[90%] md:w-[70%] mx-auto font-[400] dark:text-[#ffff] text-center' data-aos="zoom-out-up"  data-aos-duration="2500">{t("textt7AA")}</h1>
            <div className='flex mx:flex-col md:flex-row  gap-[20px] justify-center py-[35px] items-center'>
              <button className='btn_1a dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#fff] dark:hover:bg-[#304e60] hover:bg-[#304e60] bg-[#4343] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7")}</button>
              <button className='btn_1a dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#fff] dark:hover:bg-[#304e60] hover:bg-[#304e60] bg-[#4343] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7A")}</button>
            </div>
            <div className='flex flex-col gap-y-[40px] justify-center mx:px-[40px] lg:px-0 lg:py-[85px] py-[40px] items-center' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
              <img  src={main1} alt="" />
              <img  src={main1A} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="main_2">
        <div className="contener w-[90%]">
        <div className="lg:flex flex-wrap mx-auto" >
          
          {users_2.map((elem) => {
            return <Card_2 key={elem.id} {...elem} />;
          })}
        </div>
        </div>
      </div>

      <div className="main_3 py-[120px]">
        <div className="contener w-[90%] mx-auto text-center">
          <h1 className='text-[#212B31] dark:text-[#fff] text-[36px] font-[400]'>{t("text9")}</h1>
          <p className='text-[#72787D] dark:text-[#fff] xl:w-[50%] md:w-[70%] mx:w-[99%] py-[20px] mx-auto text-[20px] font-[400]'>{t("text9A")}</p>
          <div className='flex justify-center py-[80px] items-center'>
          <img className='w-[100%]' src={main3} alt="" />

          </div>
        </div>
      </div>

      <div className="main_4 py-[90px]">
        <div className="contener w-[90%] mx-auto">
          <h1 className='text-[#212B31] dark:text-[#fff] text-center text-[36px] xl:w-[48%] mx-auto md:w-[70%] mx:w-[100%] font-[400]'>{t("text10")}</h1>
          <div className="main_4A lg:flex py-[60px]">
            <div className="left_4 lg:w-[50%] flex flex-col py-[50px] justify-center">
              <h1 className='text-[#212B31] dark:text-[#fff] 2xl:w-[60%] xl:w-[85%] mx:text-center lg:text-start  mx:w-[99%] text-[34px]  font-[400]'>{t("text10A")}</h1>
              <p className='mx:text-center lg:text-start dark:text-[#fff] py-[30px] 2xl:w-[55%] xl:w-[85%] mx:w-[80%] mx:mx-auto lg:mx-0'>{t("text10B")}</p>
            </div>
          <div className="righr_4 lg:w-[50%] mx:w-[90%] mx-auto" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
            <img className='lg:w-[80%] w-full' src={main4} alt="" />
          </div>

          </div>

      
          <div className='main_4B2 lg:flex py-[120px] 2xl:w-[90%] mx:w-[50%] md:w-[65%] lg:w-[85%] mx-auto'>
            <div className='card4 '>
              <img src={maa1} alt="" />
            </div>
            <div className='card4 '>
              <img src={maa2} alt="" />
            </div>
            <div className='card4 '>
              <img src={maa3} alt="" />
            </div>
            <div className=' card4 '>
              <img src={maa4} alt="" />
            </div>

            <div className=' card4 '>
              <img src={maa5} alt="" />
            </div>

            <div className=' card4'>
              <img src={maa6} alt="" />
            </div>

          </div>

        </div>
      </div>

      <div className="main_5 py-[90px]">
        <div className="contener w-[90%] mx-auto">
          <h1 className='text-[#212B31] dark:text-[#fff] text-center text-[36px] font-[400]'>{t("text11")}</h1>
          <p className='text-[#72787D] dark:text-[#fff] text-center xl:w-[50%] md:w-[70%] mx:w-[99%] py-[20px] mx-auto text-[20px] font-[400]'>{t("text11A")}</p>

          <div className="main_5A py-[80px]">
            <div className='lg:flex justify-between'>
              <div className="left_5 lg:w-[50%] flex flex-col justify-center  ">
                <h1 className='text-[#212B31] dark:text-[#fff] mx:text-center lg:text-start text-[26px] font-[400]'>{t("text12")}</h1>
                <p className='text-[#72787D] dark:text-[#fff] mx:text-center lg:text-start 3xl:w-[70%] text-[18px] py-[20px] font-[400]'>{t("text13")}</p>
              </div>
              <div className="right_5 lg:w-[50%] mx:py-[60px] lg:py-0 mx-auto" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
                <img className='w-[80%] mx-auto' src={main5} alt="" />
              </div>
            </div>

            <div className='lg:flex justify-between   py-[50px]'>
              <div className="right_5 lg:w-[50%] mx:py-[60px] lg:py-0 mx-auto">
                <img className='w-[80%] mx-auto' src={main5A} alt="" />
              </div>
              <div className="left_5 lg:w-[50%] flex flex-col justify-center  ">
                <h1 className='text-[#212B31] dark:text-[#fff] mx:text-center lg:text-start text-[26px] font-[400]'>{t("text12A")}</h1>
                <p className='text-[#72787D] dark:text-[#fff] mx:text-center lg:text-start 3xl:w-[70%] text-[18px] py-[20px] font-[400]'>{t("text13A")}</p>
              </div>
            </div>


            <div className='lg:flex justify-between  py-[50px]'>
              <div className="left_5 lg:w-[50%] flex flex-col justify-center  ">
                <h1 className='text-[#212B31] dark:text-[#fff] mx:text-center lg:text-start text-[26px] font-[400]'>{t("text12B")}</h1>
                <p className='text-[#72787D] dark:text-[#fff] mx:text-center lg:text-start 3xl:w-[70%] text-[18px] py-[20px] font-[400]'>{t("text13B")}</p>
              </div>
              <div className="right_5 lg:w-[50%] mx:py-[60px] lg:py-0 mx-auto" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
                <img className='w-[90%] mx-auto' src={main5B} alt="" />
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="main_6">
        <div className="contener w-[90%] mx-auto">
        <h1 className='text-[#212B31] dark:text-[#fff] text-center text-[36px] font-[400]'>{t("text14")}</h1>
          <p className='text-[#72787D] dark:text-[#fff] text-center xl:w-[50%] md:w-[70%] mx:w-[99%] py-[20px] mx-auto text-[20px] font-[400]'>{t("text14A")}</p>

          <div>
          <div className="  lg:flex flex-wrap mx-auto">
          
          {users_6.map((elem) => {
            return <Card_6 key={elem.id} {...elem} />;
          })}
        </div>
          </div>

        </div>
      </div>

      <div className="main_7 py-[120px]">
        <div className="contener w-[90%] mx-auto">
        <h1 className='text-[#212B31] dark:text-[#fff] text-center pt-[80px] text-[36px] font-[400]'>{t("text17")}</h1>
          <p className='text-[#72787D] dark:text-[#c0b3b3] text-center xl:w-[50%] md:w-[70%] mx:w-[99%] py-[20px] mx-auto text-[20px] font-[400]'>{t("text17A")}</p>
        
        <div className=" lg:flex  ">
          
          {users_7.map((elem) => {
            return <Card_7 key={elem.id} {...elem} />;
          })}
        </div>
        <div className='AA4 md:flex bg-[#eaedee] mx:text-center md:text-start rounded-[5px] my-[50px] w-[90%] px-[40px] justify-between py-[40px] mx-auto'>
          <div className='flex justify-center'>
          <img src={aa4} alt="" />
          </div>
          <h1 className='text-[19px] px-[20px] mx:py-[40px] md:py-0 font-[500]'>{t("text19C")}</h1>
          <button className='btn_1a dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#fff] dark:hover:bg-[#304e60] hover:bg-[#304e60] bg-[#ffffffe9] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7A")}</button>

          
        </div>
    
        </div>
      </div>

      <div className="main_8 pt-[140px] bg-[#212B31]">
        <div className="contener">
          <div className="main_8A lg:flex justify-between">
          <div className="left_8 w-[50%] flex flex-col lg:text-start mx:text-center  mx-auto">
            <h1 className='md:text-[32px] text-[28px]  pb-[20px] font-[400] text-[#ffff]'>{t("text20")}</h1>

            <div className=' py-[10px] xl:w-[55%]' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500">
              <h2 className='text-[18px] font-[400] text-[#ffff]'>{t("text21")}</h2>
              <p className='text-[16px] font-[400] py-[7px] text-[#e0d9d9]'>{t("text22")}</p>
            </div>

            <div className=' py-[10px] xl:w-[55%]'>
              <h2 className='text-[18px] font-[400] text-[#ffff]'>{t("text21A")}</h2>
              <p className='text-[16px] font-[400] py-[7px] text-[#e0d9d9]'>{t("text22A")}</p>
            </div>

            <div className=' py-[10px] xl:w-[55%]' 
            >
              <h2 className='text-[18px] font-[400]  text-[#ffff]'>{t("text21B")}</h2>
              <p className='text-[16px] font-[400]  py-[7px] text-[#e0d9d9]'>{t("text22B")}</p>
            </div>


            <div className='flex mx:flex-col md:flex-row  gap-[20px]  py-[25px] items-center'>
              <button className='btn_8 dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#2e2a2a] text-[#fff] dark:hover:bg-[#304e60] hover:bg-[#fff] bg-[#4343] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7")}</button>
              <button className='btn_8 dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#2e2a2a] text-[#fff] dark:hover:bg-[#304e60] hover:bg-[#fff] bg-[#4343] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7A")}</button>
            </div>
          </div>
          <div className="right_8 lg:flex hidden float-right  " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000">
           <div>
           <img className='' src={main8} alt="" />
           </div>
          </div>
          </div>

          <div className="lg:flex py-[130px] flex-wrap mx-auto">
          
          {users_2.map((elem) => {
            return <Card_8 key={elem.id} {...elem} />;
          })}
        </div>

        </div>
      </div>

      <div className="main_9 dark:text-[#fff]">
        <div className="contener lg:w-[80%] md:w-[70%] mx:w-[80%] mx-auto">
          <div className="main_9A lg:flex justify-between  py-[80px]">
          <div className="left_9  lg:w-[50%] pt-[40px] lg:text-start mx:text-center">

            <h1 className='text-[32px]  pb-[20px] font-[400]'>{t("text23")}</h1>
            <p className='text-[20px] xl:w-[60%] font-[400] py-[7px] text-[#5b5858]'>{t("text23A")}</p>

            <div className='py-[50px] flex justify-center'>
            <img className='' src={main9} alt="" />
            </div>
       
          </div>


          <div className="right_9 lg:w-[50%] mx:w-[90%] md:w-[70%]  mx-auto flex flex-col lg:text-start mx:text-center">
            <h1 className='md:text-[32px] text-[28px]  pb-[20px] font-[400] text-[#ffff]'>{t("text20")}</h1>

            <div className='flex gap-[20px] pb-[10px] xl:w-[55%]'>
              <div >
                <h1 className='ONE py-[10px] px-[20px] text-[#72787D] font-[400]'>1</h1>
              </div>
              <div>
              <h2 className='text-[18px] dark:text-[#fff] font-[400] text-[#040404]'>{t("text21")}</h2>
              <p className='text-[16px] dark:text-[#fff] font-[400] py-[7px] text-[#282727]'>{t("text22")}</p>
              </div>

            </div>

            <div className='flex gap-[20px] py-[10px] xl:w-[85%]'>
              <div>
              <h1 className='ONE py-[10px] px-[20px] text-[#72787D] font-[400]'>2</h1>
              </div>
              <div>
              <h2 className='text-[18px] dark:text-[#fff] font-[400] text-[#0e0d0d]'>{t("text21A")}</h2>
              <p className='text-[16px] font-[400]  dark:text-[#fff] py-[7px] text-[#282727]'>{t("text22A")}</p>

              </div>
            </div>

            <div className='flex gap-[20px] py-[10px] xl:w-[85%]'>
              <div>
              <h1 className='ONE py-[10px] px-[20px] text-[#72787D] font-[400]'>3</h1>
              </div>
              <div>
              <h2 className='text-[18px] font-[400] dark:text-[#fff]  text-[#0e0d0d]'>{t("text21B")}</h2>
              <p className='text-[16px] font-[400] dark:text-[#fff] py-[7px] text-[#282727]'>{t("text22B")}</p>
              </div>
            </div>

            <div className='flex gap-[20px] py-[10px] xl:w-[85%]'>
              <div>
              <h1 className='ONE py-[10px] px-[20px] text-[#72787D] font-[400]'>4</h1>
              </div>
              <div>
              <h2 className='text-[18px] font-[400] dark:text-[#fff] text-[#0e0d0d]'>{t("text21B")}</h2>
              <p className='text-[16px] font-[400] dark:text-[#fff]  py-[7px] text-[#282727]'>{t("text22B")}</p>
              </div>
            </div>


            <div className='flex mx:flex-col md:flex-row  gap-[20px]  py-[25px] items-center'>
              <button className='ONE dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#2e2a2a] text-[#000] dark:hover:bg-[#304e60] hover:bg-[#4343] bg-[#fff] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7")}</button>
              <button className='ONE dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#2e2a2a] text-[#000] dark:hover:bg-[#304e60] hover:bg-[#4343] bg-[#fff] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7A")}</button>
            </div>
          </div>
          </div>

        </div>
      </div>

      <div className="main_10 py-[100px] ">
        <div className="contener w-[80%] mx-auto">
        <h1 className='text-[#212B31] dark:text-[#fff] text-center pt-[80px] text-[36px] font-[400]'>{t("text24")}</h1>
          <p className='text-[#72787D] text-center xl:w-[50%] md:w-[70%] mx:w-[99%] py-[20px] mx-auto text-[20px] font-[400]'>{t("text24A")}</p>

        <div className="main_10A lg:flex justify-between py-[70px]">
          <div className="left_10 lg:w-[50%] mx-auto">
            <div className='flex gap-[15px] dark:text-[#fff]'>
              <div className='xl:w-[10%] md:w-[10%] lg:w-[17%] mx:w-[17%]'>
                <img  src={da1} alt="" />
              </div>
              <div>
                <h1  className='text-[18px] font-[500]'>{t("text25")}</h1>
                <p  className='text-[16px] xl:w-[60%] font-[400]'>{t("text26")}</p>
              </div>
            </div>

            <div className='flex gap-[15px] py-[20px] dark:text-[#fff]'>
              <div className='xl:w-[10%] md:w-[10%] lg:w-[17%]  mx:w-[17%]'>
                <img src={da2} alt="" />
              </div>
              <div>
                <h1  className='text-[18px] font-[500]'>{t("text25A")}</h1>
                <p  className='text-[16px] xl:w-[60%] font-[400]'>{t("text26")}</p>
              </div>
            </div>

            <div className='flex gap-[15px] py-[10px] dark:text-[#fff]'>
              <div className=''>
                <img src={da3} alt="" />
              </div>
              <div>
                <h1  className='text-[18px] font-[500]'>{t("text25B")}</h1>
                <p  className='text-[16px] xl:w-[60%] font-[400]'>{t("text26B")}</p>
              </div>
            </div>

            <div className='flex gap-[15px] py-[20px] dark:text-[#fff]'>
              <div className=''>
                <img src={da4} alt="" />
              </div>
              <div>
                <h1  className='text-[18px] font-[500]'>{t("text25C")}</h1>
                <p  className='text-[16px] xl:w-[60%] font-[400]'>{t("text26C")}</p>
              </div>
            </div>


          </div>

          <div className="right_10 lg:w-[50%] AA4 mx:my-[60px] lg:my-0 px-[70px] py-[50px] leading-[48px] bg-[#eef2f3]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
           <div className=''>
           <h1 className='xl:text-[30px] mx:text-[24px] font-[400]'>{t("text24B")}</h1>
           <div className='flex gap-[10px]  pt-[40px]'>
           <div className='pt-[10px]'>
           <img src={main10} alt="" />
           </div>
            <div>
              <h1 className='text-[16px] font-[400]'>{t("text24C")}</h1>
              <h2 className='text-[16px] mt-[-25px] text-[#72787D] font-[400]'>{t("text24D")}</h2>
            </div>
           </div>
           </div>
          </div>
        </div>
        
        </div>

      </div>

      <div className="main_11">
        <div className="contener">
          <div className='py-[100px]' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000">
              <Swiper1 h1={t("text27")} h2={t("text27A")} h3={t("text27B")}/>

          </div>
        </div>
      </div>

      <div className="main_12 py-[130px]">
        <div className="contener w-[80%] mx-auto" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">

          <div className="main_12A bg-[url('./assets/main12.png')] py-[80px] bg-no-repeat bg-cover">

            <h1 className='lg:text-[48px] mx:text-[30px] md:text-[38px] dark:text-[#fff] font-[500] px-[60px] xl:w-[90%] py-[100px] mx-auto text-center'>{t("text28")}</h1>
            
            <div className='flex mx:flex-col md:flex-row  gap-[20px] justify-center py-[35px] items-center'>
              <button className='btn_1a dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#fff] dark:hover:bg-[#304e60] hover:bg-[#304e60] bg-[#4343] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7")}</button>
              <button className='btn_1a dark:text-[#fff] dark:bg-[#2e2929] hover:text-[#fff] dark:hover:bg-[#304e60] hover:bg-[#304e60] bg-[#4343] rounded-[7px] px-[40px] text-[16px] py-[10px] font-[400]'>{t("textt7A")}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="main_13 dark:text-[#fff]">
        <div className="contener lg:w-[80%] mx:w-[50%] mx-auto">

        <div className='lg:flex justify-between mt-40 sm:flex-col sm:text-center  lg:flex-row'>
            <div>
              <div className='lg:flex gap-3 sm:ml-32 md:ml-80 lg:ml-0'>
              <div><img src={nav} alt="" /></div>
              <p>СтройКонтроль</p>
              </div>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-6 text-[#72787D]'>г. Москва</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-3 text-[#72787D]'>Пресненская наб., 88, оф. 527</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-3 text-[#72787D]'>info@stroycontrol.ru</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-3 text-[#72787D]'>+7 (945) 123-45-67</p>
            </div>
            <div>
              <p className='text-[16px] font-normal'>Наш продукт</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-6 text-[#72787D]'>Процесс</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-3 text-[#72787D]'>Продукция</p>
            </div>
            <div>
              <p className='text-[16px] dark:text-[#fff] font-normal'>Наш продукт</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-6 text-[#72787D]'>Процесс</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-3 text-[#72787D]'>Продукция</p>
            </div>
            <div>
              <p className='text-[16px] font-normal'>О нас</p>
              <p className='text-[16px] dark:text-[#fff] font-normal mt-6 text-[#72787D]'>Связаться с нами</p>
            </div>
          </div>

          <div className='mt-20 pb-5'>
            <hr />

            <div className='lg"flex justify-between'>
              <p className='text-[16px] font-normal dark:text-[#fff] font text-[#72787D] mt-8'>© 2020 СтройКонтроль, Все права защищены.</p>
              <p className='text-[16px] font-normal dark:text-[#fff] font text-[#72787D] mt-8'>Политика конфиденциальности</p>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  )
}

export default App
