import React, { useContext } from 'react'
import { CursorContext } from '../components/CustomCursor/CursorManager'
import "./style.scss"

const Hamburger = () => {
  const { setType } = useContext(CursorContext)
  return (
    <div
      className="hamburger-icon"
      onMouseEnter={()=> setType("hamburger")}
      onMouseLeave={()=> setType("default")}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  )
}

export default Hamburger