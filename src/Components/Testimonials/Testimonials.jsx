import React from 'react'
import "./Testimonials.css"
import { useRef } from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


function Testimonials() {

  const slidee = useRef()
  let transX=0

  const shiftForward =()=>{
      if(transX>-50){
          transX-=25
      }
      slidee.current.style.transform = `translate(${transX}%)`
  }

  const shiftBackword = ()=>{
      if(transX<0){
          transX+=25
      }
      slidee.current.style.transform = `translate(${transX}%)`
  }

return (
  <div>
      <div className="experience">
          <img src={next_icon} alt="" className='next-icon' onClick={shiftForward} />
          <img src={back_icon} alt="" className='back-icon' onClick={shiftBackword} />
          <div className="slider">
              <ul ref={slidee}>
                  <li>
                      <div className="slide">
                          <div className="user-data">
                              <img src={user_1} alt="" />
                              <div>
                                  <h3>Naman jain</h3>
                                  <span>Edusity, USA</span>
                              </div>
                          </div>
                          <p>"LinguaLearn helped me become fluent in Spanish in just 6 months. The vocabulary tools are incredible!"</p>
                          <p className='tool'>English to Spanish</p>
                      </div>
                  </li>

                  <li>
                      <div className="slide">
                          <div className="user-data">
                              <img src={user_2} alt="" />
                              <div>
                                  <h3>Abhiman singh</h3>
                                  <span>California</span>
                              </div>
                          </div>
                          <p>"The quiz feature adapts to my learning style. I've never made progress this quickly with any other app."</p>
                          <p className='tool'>English to Japanese</p>
                      </div>
                  </li>

                  <li>
                      <div className="slide">
                          <div className="user-data">
                              <img src={user_3} alt="" />
                              <div>
                                  <h3>Piyush</h3>
                                  <span>Bihar</span>
                              </div>
                          </div>
                          <p>"I love how I can track my progress. It keeps me motivated to continue learning every day."</p>
                          <p className='tool'>Russian to English</p>
                      </div>
                  </li>

                  <li>
                      <div className="slide">
                          <div className="user-data">
                              <img src={user_4} alt="" />
                              <div>
                                  <h3>Aviral Mishra</h3>
                                  <span>Sydney</span>
                              </div>
                          </div>
                          <p>“The progress tracker gives me a clear view of how far I’ve come, which is super motivating.”.</p>
                          <p className='tool'>Hindi to English</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>

  </div>
)
}

export default Testimonials

// This contain functionality for back and next button 
