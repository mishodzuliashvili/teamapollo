import React from 'react'

const Sliders = ({uniforms,setUniforms}) => {
  return (
    <div className='flex flex-col p-10 font-bold uppercase gap-5'>
        {Object.keys(uniforms).map((key) => {
            return <div key={key} className='flex flex-col'>
                <label htmlFor="">{key}</label>
                <input
                onChange={(e) => {
                    let uN = {...uniforms}
                    uN[key] = e.target.value/100
                    setUniforms(uN)
                }}
                type="range" min={0} max={100} name="" defaultValue={uniforms[key]*100} />
            </div>
        })}
    </div>
  )
}

export default Sliders