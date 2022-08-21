import React, { useEffect, useState } from 'react'
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { FaPlay } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import { AiOutlineFullscreen } from "react-icons/ai"

import { Fractals } from './data';
import Editor from '../assets/Editor';
import Canvasi from '../assets/Canvasi';
import Sliders from '../assets/Sliders';
import FractalsSideBar from '../assets/FractalsSideBar';
const Playground = () => {
    const [aceE, setAceE] = useState("")
    const [uniforms, setUniforms] = useState([])
    const [fractal, setFractal] = useState(Fractals["gela"])
    const [paused, setPaused] = useState(false)
    const [userFriendly, setUserFriendly] = useState(false)
    const [sideBar, setSideBar] = useState(false)
    const [fullSize, setFullSize] = useState(false)
    useEffect(() => {
        setAceE(fractal.code)
        setUniforms(fractal.uniforms)
    }, [fractal])
    // console.log(fullSize);
    return (
        <div className={'fixed w-full h-screen flex items-center justify-center pt-[60px] top-0 left-0 ' + (fullSize ? "z-[1000]": "z-[10]")}>
            <div className={'overflow-hidden bg-[#0f1922] shadow-lg ' + (fullSize ? "fixed w-full h-screen top-0 left-0 z-[9000] rounded-none" : "relative w-[90%] max-w-[1240px] h-[90%] rounded-[10px]")}>
                <div className='h-[70px] text-lg w-full text-right bg-[#02242d] flex items-center justify-between relative z-10 px-8'>
                    <div className='flex'>
                        <span className='hover:text-[#ffffff8f]' onClick={() => setPaused(p => !p)}>{paused ? <FaPlay className='cursor-pointer' /> : <FaPlay className='cursor-pointer' />}</span>
                        <span onClick={() => setUserFriendly(p => !p)} className='ml-5 cursor-pointer hover:text-[#ffffff8f]'><FaUserFriends /></span>
                    </div>
                    <a href="/" className='px-4 hover:text-[#ffffff8f]'>TEAM <strong>APOLLO</strong></a>
                    <span onClick={() => setSideBar(p => !p)} className='hover:text-[#ffffff8f]'><RiBarChartHorizontalFill className='cursor-pointer' /></span>
                </div>
                <div className='flex relative w-full h-[calc(100%-70px)]'>
                    <div className={'flex-col w-[40%] h-full ' + (userFriendly ? "flex" : "hidden")}>
                        <Sliders uniforms={uniforms} setUniforms={setUniforms} />
                    </div>
                    <div className={'w-full h-full ' + (!userFriendly ? "block" : "hidden")}>
                        <Editor aceE={aceE} setAceE={setAceE} />
                    </div>
                    <div className='w-full h-full'>
                        <Canvasi code={aceE} uniforms={uniforms} paused={paused} />
                    </div>
                    <FractalsSideBar shown={sideBar} setFractal={setFractal} />
                    <span onClick={() => setFullSize(p => !p)} className='hover:text-[#ffffff8f] rounded-full absolute p-2 text-xl right-2 bottom-2 z-[3000] bg-[#02242d] cursor-pointer    '><AiOutlineFullscreen/></span>

                </div>
            </div>
        </div>
    )
}

export default Playground