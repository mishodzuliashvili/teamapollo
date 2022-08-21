import React, { useState } from 'react'
import { SiDiscord, SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const [sidebar, setSidebar] = useState(false)

    const links = <>
        {/* <Link to="/" className='px-4 hover:underline hover:text-[#ffffff8f]'>HOME</Link> */}
        <Link to="/about" className='px-4 hover:underline hover:text-[#ffffff8f]'>ABOUT</Link>
        {/* <Link to="/work" className='px-4 hover:underline hover:text-[#ffffff8f]'>WORK</Link> */}
        {/* <Link to="/contact" className='px-4 hover:underline hover:text-[#ffffff8f]'>CONTACT</Link> */}
        <a href="https://mishodzuliashvili.github.io/" className='px-4 hover:underline hover:text-[#ffffff8f]'><SiGithub className='text-xl' /></a>
        <a href="https://discord.gg/f3YBZH8mnG" className='pl-0 hover:underline hover:text-[#ffffff8f]'><SiDiscord className='text-xl' /></a>
    </>
    return (
        <>
            <div className={"flex items-center flex-col fixed bg-[#0f1922] w-full h-screen border-none pt-[120px] transition-all duration-500 z-[30] gap-9"
                + (sidebar ? " md:invisible md:transition-none right-[0]" : " invisible right-[-100%]")}>
                {links}
            </div>
            <div className='flex items-center w-full h-[90px] justify-between z-40 px-10 relative'>
                <div className='text-md cursor-pointer'>
                    <a href="/" className='px-4 hover:text-[#ffffff8f]'>TEAM <strong>APOLLO</strong></a></div>
                <div className='text-sm md:flex items-center hidden'>
                    {links}
                </div>
                <div className='block md:hidden cursor-pointer'>
                    <div className={"container " + (sidebar && "change")} onClick={() => setSidebar((r) => !r)}><div className="bar1"></div><div className="bar2"></div><div className="bar3"></div></div>
                </div>
            </div></>
    )
}

export default Navbar