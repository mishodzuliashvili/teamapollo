import React from 'react'
import { Fractals } from '../pages/data'

const FractalsSideBar = ({shown,setFractal}) => {
  return (
    <div className={'flex flex-col p-10 uppercase gap-5 ' + (shown ? "block" :"hidden")}>
        {Object.keys(Fractals).map(key => {
            return <span key={key} className="cursor-pointer" onClick={() => {setFractal(Fractals[key])}}>{key}</span>
        })}
    </div>
  )
}

export default FractalsSideBar