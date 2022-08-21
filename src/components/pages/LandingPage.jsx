import React from 'react'
import mandelBulb from "../../assets/websiteImages/mandelbulb.gif"
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { FaPlay } from "react-icons/fa"
import Typed from "react-typed";
import MainGrid from '../assets/MainGrid';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <MainGrid
    left={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            <div className='h-[40px] w-full text-right bg-[#02242d] flex items-center justify-between relative z-10'>
                            <FaPlay className='ml-5' /><RiBarChartHorizontalFill className='mr-5' />
                            </div>
                            <img src={mandelBulb} className='w-full h-full object-cover mt-[-10px] z-0 relative' alt="" />
                        </div>
                    </div>
    } right = {
        <div className='flex w-full h-full items-center justify-center'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["Build The Comunity", "Program From Future"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                Team Apollo wants to create the community of creative programmers that will have the opportunity to show ther skills to others. < br /> Give And Get Motivation. < br /> Happy Codding.
            </p>
        <Link to="/playground">            <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button>
</Link>
        </div>
    </div>
    } />
  )
}

export default LandingPage