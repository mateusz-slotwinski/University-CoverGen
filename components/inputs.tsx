import React, {useState} from 'react'
import Image from 'next/image'

import {Data} from '../types/data'

import Examples from './examples'


const Inputs: React.FunctionComponent = (props:any) => {
  const [title, setTitle] = useState('')
  const [part, setPart] = useState(1)
  const [subtitle_a, setSubtitleA] = useState('')
  const [subtitle_b, setSubtitleB] = useState('')
  const [color, setColor] = useState('')
  const [author, setAuthor] = useState('')
  const [icon, setIcon] = useState('')
  const [image, setImage] = useState('')
  const [title_2, setTitle2] = useState('')
  const [pages, setPages] = useState(1)
  const [about, setAbout] = useState('')

  const changeTitleHandler = (event:any) => {
    const value = event.target.value
    setTitle(value)
  }
  const changePartHandler = (event:any) => {
    const value = event.target.value
    setPart(value)
  }
  const changeSubtitleAHandler = (event:any) => {
    const value = event.target.value
    setSubtitleA(value)
  }
  const changeSubtitleBHandler = (event:any) => {
    const value = event.target.value
    setSubtitleB(value)
  }
  const changeColorHandler = (event:any) => {
    const value = event.target.value
    setColor(value)
  }
  const changeAuthorHandler = (event:any) => {
    const value = event.target.value
    setAuthor(value)
  }
  const changeIconHandler = (event:any) => {
    const value = event.target.value
    setIcon(value)
  }
  const changePagesHandler = (event:any) => {
    const value = event.target.value
    setPages(value)
  }
  const changeTitle2Handler = (event:any) => {
    const value = event.target.value
    setTitle2(value)
  }
  const changeImageHandler = (event:any) => {
    const value = event.target.value
    setImage(value)
  }
  const changeAboutHandler = (event:any) => {
    const value = event.target.value
    setAbout(value)
  }

  const generateCanvas = (data:Data) => {
    props.onSubmit(data)
  }

  return (
      <main id="container" className="inputs">
        <div id="examples">
          <div className="example"><Image width="70" height="70" alt="Matematyka" src="/icons/sciences/mathematics.svg" onClick={()=> generateCanvas(Examples.Mathematics)} /></div>
          <div className="example"><Image width="70" height="70" alt="Fizyka" src="/icons/sciences/physics.svg" onClick={()=> generateCanvas(Examples.Physics)} /></div>
          <div className="example"><Image width="70" height="70" alt="Elektronika" src="/icons/sciences/electronics.svg" onClick={()=> generateCanvas(Examples.Electronics)} /></div>
          <div className="example"><Image width="70" height="70" alt="Informatyka" src="/icons/sciences/informatics.svg" onClick={()=> generateCanvas(Examples.Informatics)} /></div>
          <div className="example"><Image width="70" height="70" alt="Chemia" src="/icons/sciences/chemistry.svg" onClick={()=> generateCanvas(Examples.Chemistry)} /></div>
          <div className="example"><Image width="70" height="70" alt="Ekonomia" src="/icons/sciences/economics.svg" onClick={()=> generateCanvas(Examples.Economics)} /></div>
          <div id="gap"></div>
          <div className="example adv"><Image width="70" height="70" alt="Elektronika" src="/icons/sciences/physicsnanostr.svg" onClick={()=> generateCanvas(Examples.PhysicsNanostr)} /></div>
          <div className="example adv"><Image width="70" height="70" alt="Elektronika" src="/icons/sciences/physicsnuclear.svg" onClick={()=> generateCanvas(Examples.PhysicsNuclear)} /></div>
        </div>
        <input value={title} onChange={changeTitleHandler} id="title" placeholder="Tytuł" />
        <input value={title_2} onChange={changeTitle2Handler} id="subtitle" placeholder="Tytuł 2" />
        <input value={part} onChange={changePartHandler} id="part" type="number" placeholder="Część" />
        <input value={pages} onChange={changePagesHandler} id="pages" type="number" placeholder="Ilość Stron" />
        <input value={subtitle_a} onChange={changeSubtitleAHandler} id="subtitle_a" placeholder="Opis 1" />
        <input value={subtitle_b} onChange={changeSubtitleBHandler} id="subtitle_b" placeholder="Opis 2" />
        <input value={color} onChange={changeColorHandler} id="color" placeholder="Kolor (hex)" />
        <input value={author} onChange={changeAuthorHandler} id="author" placeholder="Autor" />
        <input value={icon} onChange={changeIconHandler} id="icon" placeholder="Ikona" />
        <input value={image} onChange={changeImageHandler} id="image" placeholder="Zdjęcie" />
        <textarea value={about} onChange={changeAboutHandler} id="about" placeholder="O ksiazce" />
        <button id="submit" onClick={()=> generateCanvas({
          TITLE: title.toUpperCase(),
          PART: part,
          SUBTITLE: [subtitle_a, subtitle_b],
          AUTHOR: author,
          color:color,
          icon: icon,
          pages: pages,
          image: image,
          title_2: title_2,
          about: about,
        })}>
          Generuj
        </button>
      </main>
  )
}

export default Inputs
