import React from 'react'
import MainGrid from '../assets/MainGrid'
import contact from "../../assets/websiteImages/contact.png"
import Typed from "react-typed";
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { FaPlay } from "react-icons/fa"

const ContactPage = () => {
  return (
    <div>
        <MainGrid
    head={<>Contact</>}
    left={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                        <div className='h-[40px] w-full text-right bg-[#02242d] flex items-center justify-between relative z-10'>
                            <FaPlay className='ml-5' /><RiBarChartHorizontalFill className='mr-5' />
                            </div>
                            <img src={contact} className='w-[60%] mx-auto h-full object-contain mt-[-20px] z-0 relative' alt="" />
                        </div>
                    </div>
    } right = {
        <div className='flex w-full h-full items-center justify-center  text-left'>
        <div className='pl-10 w-full'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["Email Us","See Discord"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-lg w-full'>
                teamapollo@gmail.com <br />
                <a href="https://discord.gg/f3YBZH8mnG" className='text-[#bf71ff]'>Our Discord</a>
            </p>
            {/* <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button> */}
        </div>
    </div>
    } />
    </div>
  )
}

export default ContactPage