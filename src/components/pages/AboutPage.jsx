import React from 'react'
import kiuMural from "../../assets/websiteImages/kiuMural.jpg"
import demetreShonia from "../../assets/websiteImages/demetreShonia.jpg"
import mishoDzuliashvili from "../../assets/websiteImages/mishoDzuliashvili.jpg"
import lukaGorgadze from "../../assets/websiteImages/lukaGorgadze.jpg"
import zukaKenchuashvili from "../../assets/websiteImages/zukaKenchuashvili.jpg"

import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { FaPlay } from "react-icons/fa"
import Typed from "react-typed";
import MainGrid from '../assets/MainGrid';

const AboutPage = () => {
  return (
    <>
    <MainGrid
    head={<>About Us</>}
    right={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            
                            <img src={kiuMural} className='w-[400%] h-full object-cover mt-[0] z-0 relative' alt="" />
                        </div>
                    </div>
    } left = {
        <div className='flex w-full h-full items-center justify-center  text-right'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["KIU Students", "Computer Scientists"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                Hello! Who are we? we are four curios person who love programming. We are getting more and more from our lifes and want to give same other people who dont know to program creatvily. We believe that our project wiil be used not only programmers also users who dont know what is coding and also HR managers who lookin for creative programmers with high skiils in computer science and mathematics. please scrool if u want to see our portfolios or see work pnael where we have our builtin programs.
            </p>
            {/* <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button> */}
        </div>
    </div>
    } />
    <MainGrid
    head={<>Demetre Shonia</>}
    left={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            
                            <img src={demetreShonia} className='w-full h-full object-cover mt-[0] z-0 relative' alt="" />
                        </div>
                    </div>
    } right = {
        <div className='flex w-full h-full items-center justify-center  text-left'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["Game Dev", "Etherium Dev"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                Hello! Who are we? we are four curios person who love programming. We are getting more and more from our lifes and want to give same other people who dont know to program creatvily. We believe that our project wiil be used not only programmers also users who dont know what is coding and also HR managers who lookin for creative programmers with high skiils in computer science and mathematics. please scrool if u want to see our portfolios or see work pnael where we have our builtin programs.
            </p>
            {/* <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button> */}
        </div>
    </div>
    } />
        <MainGrid
    head={<>Misho Dzuliashvili</>}
    right={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            
                            <img src={mishoDzuliashvili} className='w-full h-full object-cover mt-[0] z-0 relative' alt="" />
                        </div>
                    </div>
    } left = {
        <div className='flex w-full h-full items-center justify-center  text-right'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["KIU Students", "Computer Scientists"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                Hello! Who are we? we are four curios person who love programming. We are getting more and more from our lifes and want to give same other people who dont know to program creatvily. We believe that our project wiil be used not only programmers also users who dont know what is coding and also HR managers who lookin for creative programmers with high skiils in computer science and mathematics. please scrool if u want to see our portfolios or see work pnael where we have our builtin programs.
            </p>
            {/* <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button> */}
        </div>
    </div>
    } />
    <MainGrid
    head={<>Luka Gorgadze</>}
    left={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            
                            <img src={lukaGorgadze} className='w-full h-full object-cover mt-[0] z-0 relative' alt="" />
                        </div>
                    </div>
    } right = {
        <div className='flex w-full h-full items-center justify-center  text-left'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["Game Dev", "Etherium Dev"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                Hello! Who are we? we are four curios person who love programming. We are getting more and more from our lifes and want to give same other people who dont know to program creatvily. We believe that our project wiil be used not only programmers also users who dont know what is coding and also HR managers who lookin for creative programmers with high skiils in computer science and mathematics. please scrool if u want to see our portfolios or see work pnael where we have our builtin programs.
            </p>
            {/* <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button> */}
        </div>
    </div>
    } />
        <MainGrid
    head={<>Zuka Kenchuashvili</>}
    right={
        <div className='flex w-full h-full items-center justify-center'>
                        <div className='rounded-[10px] overflow-hidden bg-white w-[80%] m-10 h-[300px] hover:w-full hover:h-[320px] cursor-pointer relative'>
                            
                            <img src={zukaKenchuashvili} className='w-full h-full object-cover object-[top_-250px_right_0] z-0 relative' alt="" /> {/* object cover oc */}
                        </div>
                    </div>
    } left = {
        <div className='flex w-full h-full items-center justify-center  text-right'>
        <div className='pl-10'>
            <h1 className='text-4xl font-bold'>
                <Typed
                    strings={["KIU Students", "Computer Scientists"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </h1>
            <p className='mt-5 text-md'>
                Hello! Who are we? we are four curios person who love programming. We are getting more and more from our lifes and want to give same other people who dont know to program creatvily. We believe that our project wiil be used not only programmers also users who dont know what is coding and also HR managers who lookin for creative programmers with high skiils in computer science and mathematics. please scrool if u want to see our portfolios or see work pnael where we have our builtin programs.
            </p>
            {/* <button className='px-[45px] py-2 bg-white shadow-2xl text-md cursor-pointer rounded-full mt-5 text-[#141250] hover:opacity-80'>Start Coding</button> */}
        </div>
    </div>
    } />
    </>
  )
}

export default AboutPage