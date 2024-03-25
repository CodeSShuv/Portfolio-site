import React from 'react'
import "./CSS/home.css"
const Home = () => {
  return (
    <section className='Home'>
      <div className="map">
        <img src="./images/nepal.png" alt="" />
      </div>
        <div className="home-items-container">
            <div className="avatar">
                <img src="./images/avatar.png" alt="" />
            </div>
            <div className="intro">
            <h2>Hi! Me <span className='highlight'>Shuvam Gautam.</span></h2>
            </div>
            <div className="short-intro">
            “A tech enthusiast from the land of Himalayas” 
            </div>
        </div>
    </section>
  )
}

export default Home