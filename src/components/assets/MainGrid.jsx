import React from 'react'

const MainGrid = ({ left, right, head }) => {
    return (
        <div className='z-10 relative'>
            <div className='flex w-full items-center justify-center text-5xl relative z-[80] h-[20px]'>
                {head}
            </div>
            <div className='grid md:grid-cols-2 w-full md:h-[100vh] px-10 md:mt-[-110px] z-10 relative'>
                <div >
                    {left}
                </div>
                <div className='pb-10'>
                    {right}
                </div>
            </div>
        </div>
    )
}

export default MainGrid