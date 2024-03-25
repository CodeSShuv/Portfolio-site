import React from 'react'
import "./CSS/card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <div className={"heading"+` ${props.theme}`}>
            <h3>{props.heading}</h3>
        </div>
        <div className="img-container">
          <a href={`${props.link}`} target='_blank'>

            <img src={`${props.img}`}/>
          </a>
        </div>
        <div className={"progress"+` ${props.theme}`+` ${props.theme }`+ "-trans"}>
            <div className={"progress-bar"+` ${props.theme} ` }style={{"width":`${props.progress}%` }}></div>
        </div>
    </div>
  )
}

export default Card