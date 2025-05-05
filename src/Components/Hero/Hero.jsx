import React from 'react'
import './Hero.css'
import hero_img from "../../assets/hero.png"

function Hero() {
  return (
    <div className='hero'>
      <div className="heroleft">
        <h1>Learn any language, <br />without the friction</h1>
        <p>
        Learn faster and smarter with interactive lessons, curated vocab, and quizzes that track your progress—all in one seamless platform.
        </p>
        <div className="button-group">
          <button className='btn'>Get Started ➝</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      <div className="heroright">
        <img className='image'  src={hero_img} alt="Language learning illustration" />
      </div>
    </div>
  )
}

export default Hero