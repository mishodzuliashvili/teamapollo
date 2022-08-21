import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from "glsl-canvas-js";

const Canvasi = ({ code, uniforms, paused }) => {
  const canva = useRef()
  const [glsl, setGlsl] = useState(null)
  useEffect(() => setGlsl(new Canvas(canva.current, { extensions: ['EXT_shader_texture_load'] })), [])
  useEffect(() => {
    if (glsl) {
      glsl.load(code)
      glsl.setUniforms(uniforms)
    }
  }, [code,uniforms,glsl])

  useEffect(() => {
    if (glsl) {
      if (paused) glsl.pause()
      if (!paused) glsl.play()
    }
  }, [paused,glsl])
  return <canvas ref={canva} className="w-full h-screen"></canvas>
}

export default Canvasi