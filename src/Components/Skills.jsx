import React from 'react'
import "./CSS/skills.css"
import Card from './Card'
const Skills = () => {
  return (
    <section className='Skills'>
            <div className="languages">
                <h2>Languages</h2>
        <div className="card-container">
                
            <Card
                img = {"./images/js-icon.png"}
                heading ={"JS"}
                progress = {98}
                theme ={"js"}
            />
             <Card
                img = {"./images/py-icon.png"}
                heading ={"Python"}
                progress = {98}
                theme ={"py"}
            />
        </div>
            </div>
            <div className="languages">
                <h2>Front End</h2>
        <div className="card-container">
                
            <Card
                img = {"./images/html-css.jpg"}
                heading ={"Html,Css"}
                progress = {98}
                theme="html"
            />
             <Card
                img = {"./images/reactjs.png"}
                heading ={"React.js"}
                progress = {98}
                theme = "react"
            />
        </div>
            </div>
    </section>
  )
}

export default Skills