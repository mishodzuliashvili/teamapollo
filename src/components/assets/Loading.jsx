import React, { useEffect, useState } from 'react'
import loadingImg from "../../assets/websiteImages/racketLogo.png"
import { useMain } from './MainState'

const Loading = () => {
    const {isLoading} = useMain()

    return (
        <div className={'bg-[#0f1922] h-screen w-full fixed z-[6000] flex items-center justify-center top-0 left-0 transition-all duration-[1000ms]' + (!isLoading && " top-[-130%]")}>
            <img src={loadingImg} className={'w-[150px] transition-all duration-[500ms] animate-bounce opacity-100' + (!isLoading && " opacity-0")} alt="crysta img" />
        </div>
    )
}

export default Loading