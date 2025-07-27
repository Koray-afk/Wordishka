import React, { useState, useEffect } from 'react'
import './Hero.css'
import hero_img from "../../assets/hero.png"
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function Hero() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleGetStarted = () => {
    if (user) {
      // If user is logged in, take them to lessons
      navigate('/lessons');
    } else {
      // If user is not logged in, take them to register
      navigate('/sign');
    }
  };

  const handleLearnMore = () => {
    // Scroll to the features section
    const featuresSection = document.querySelector('.feature-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero'>
      <div className="heroleft">
        <h1>Learn any language, <br />without the friction</h1>
        <p>
        Learn faster and smarter with interactive lessons, curated vocab, and quizzes that track your progress—all in one seamless platform.
        </p>
        <div className="button-group">
          <button className='btn' onClick={handleGetStarted}>
            {user ? 'Start Learning ➝' : 'Get Started ➝'}
          </button>
          <button className='btn' onClick={handleLearnMore}>Learn More</button>
        </div>
      </div>

      <div className="heroright">
        <img className='image'  src={hero_img} alt="Language learning illustration" />
      </div>
    </div>
  )
}

export default Hero