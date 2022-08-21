import React, { useEffect, useState } from 'react'
import bgTop from "../../assets/websiteImages/bgTop.png"

const BGTopImg = () => {
    const [pos, setPos] = useState({ top: "0", left: "0" })
    useEffect(()=>{
        document.onmousemove = (e) => {
            let speed = 10
            let x = speed * e.clientX / window.innerWidth - 5
            let y = speed * e.clientY / window.innerHeight
            setPos({ top: x + "px", left: y + "px" })
        }
    },[])
  return (
    <img src={bgTop} className={"fixed w-full h-screen object-cover opacity-70"} style={pos} alt="" />
  )
}

export default BGTopImg