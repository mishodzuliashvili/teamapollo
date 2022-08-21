import React from 'react'
import MainGrid from '../assets/MainGrid'
import mandelBulb from "../../assets/websiteImages/mandelbulb.gif"
import Typed from "react-typed";

const WorkPage = () => {
  return (
    <div>
        <MainGrid
    head={<>Our Work</>}
    right={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            
                            <img src={mandelBulb} className='w-[400%] h-full object-cover mt-[0] z-0 relative' alt="" />
                        </div>
                    </div>
    } left = {
        <div className='flex w-full h-full items-center justify-center  text-right'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["Our Website", "Team Apollo"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                fisrtly i have to say that one profuct is the site which you use know and also this team. our teams involve into apollo was great event. please scrool to see our programs on OS.
            </p>
            {/* <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button> */}
        </div>
    </div>
    } />
            <MainGrid
    head={<>MandelBulBrot</>}
    left={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            
                            <img src={mandelBulb} className='w-[400%] h-full object-cover mt-[0] z-0 relative' alt="" />
                        </div>
                    </div>
    } right = {
        <div className='flex w-full h-full items-center justify-center  text-left'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["Our Website", "Team Apollo"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                fisrtly i have to say that one profuct is the site which you use know and also this team. our teams involve into apollo was great event. please scrool to see our programs on OS.
            </p>
            <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Download Now</button>
        </div>
    </div>
    } />
    </div>
  )
}

export default WorkPage