// import { useState } from 'react'

import './App.css'
import CallToAction from './Components/CallToAction/CallToAction'
import Features from './Components/Features/Features'
import Hero from './Components/Hero/Hero'
import Language from './Components/Language/Language'
import Navbar from './Components/Navbar /Navbar'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'


function App() {




  return (
    <>
    <Navbar/>
    <Hero/>
    <Title bigtitle="Choose Your Language" smalltitle="Start your language journey with one of our 30+ languages "/>
    <Language/>
    <Title bigtitle="Key Features" smalltitle="Everything you need to master a new language"/>
    <Features/>

    <div className="testimonials">
    <Title bigtitle="What Our Users Say" smalltitle="Join thousands of satisfied language learners"/>
    <Testimonials/>
    </div>
    <CallToAction/>
    </>
  )
}

export default App

