import React from 'react'

const BodyContainer = ({ children }) => {
    return (
        <div className='w-full h-screen relative text-white'>
            <div className='w-full max-w-[1240px] mx-auto'>
                {children}
            </div>
        </div>
    )
}

export default BodyContainer