import React, {useState} from 'react'
import type { NextPage } from 'next'
import Inputs from '../components/inputs'
import {Data} from '../types/data'
import {render, renderback, rendermid} from '../scripts/canvas'

const Home: NextPage = () => {
  const [showInputs, toggleInputs] = useState(true)

  const style= {
    display:'none'
  }

  const generate = (data:Data) => {
    toggleInputs(!showInputs)
    render(document.querySelector('#canvas'), data)
    renderback(document.querySelector('#canvasback'), data)
    rendermid(document.querySelector('#canvasmid'), data)
  }

  return (
    <div id="cont" > 
      { showInputs && <Inputs onSubmit={(data: Data)=>generate(data)}/>} 
      <canvas width="825" height="1200" id="canvasback" style={style}></canvas> 
      <canvas width="82.5" height="1200" id="canvasmid" style={style}></canvas> 
      <canvas width="825" height="1200" id="canvas" style={style}></canvas>
    </div>
  )
}

export default Home
