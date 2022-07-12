import React, {useState} from 'react'
import Image from 'next/image'

import {Data} from '../types/data'
import Examples from './examples'

import VolModal from './pick'


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
  const [example, setExample] = useState(0)

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

  const allExamples = [
    Examples.Mathematics,
    Examples.Physics,
    Examples.Electronics,
    Examples.Informatics,
    Examples.Chemistry,
    Examples.Economics,
    Examples.Telecommunications,
    Examples.PhysicsNanostr,
    Examples.PhysicsNuclear,
    Examples.QuantumEngineering
  ]

  return (
      <main id="container" className="inputs">
        <div id="examples">
        {[...Array(allExamples.length).keys()].map((e) => 
          <div
            key={e}
            className={e == example ? 'example thisPart' : 'example'}
            style={{backgroundColor: allExamples[e](1).color}}
          >
            <Image
              alt={allExamples[e](1).TITLE}
              width="70"
              height="70"
              src={`/icons/sciences/${allExamples[e](1).icon}`}
              onClick={()=> setExample(e)}
            />
          </div>
        )}
        </div>

        <div id="examples">
          {[...Array(allExamples[example](1).levels.length).keys()].map((e) => 
            <div key={e} className="example part" onClick={() => generateCanvas(allExamples[example](e+1))} style={{backgroundColor: allExamples[example](1).color}} >{e + 1}</div>
          )}
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
          AUTHOR: [author],
          color:color,
          icon: icon,
          pages: pages,
          image: image,
          title_2: title_2,
          about: about,
          levels: [],
        })}>
          Generuj
        </button>
      </main>
  )
}

export default Inputs
