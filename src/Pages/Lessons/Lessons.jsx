import React from 'react'
import Navbar from '../../Components/Navbar /Navbar'
import LearningProgress from '../../Components/LearningProgress/LearningProgress'
import LessonCard from '../../Components/LessonCard/LessonCard'
import './Lessons.css';
import Footer from '../../Components/Footer/Footer';

function Lessons() {
  return (
    <div>
      <Navbar/>
      <h1 className='div2'></h1>
      <div className="container">
        <h1>Master Your Language Skills</h1>
        <h3>Structured lessons designed to help you learn vocabulary and phrases effectively</h3>
        <LearningProgress/>
      </div>
      <div className="lesson-grid">
        <LessonCard
          title="Greetings and Introductions"
          subtitle="Learn basic greetings and how to introduce yourself"
          duration="15 min"
          status="Completed"
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&crop=center"
        />
        <LessonCard
          title="Basic Phrases"
          subtitle="Common phrases for everyday conversations"
          duration="12 min"
          status="In Progress"
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&crop=center"
        />
        <LessonCard
          title="Numbers and Counting"
          subtitle="Learn how to count and use numbers"
          duration="10 min"
          status="Locked"
          image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center"
        />
        <LessonCard
          title="Days and Months"
          subtitle="Understand days of the week and months"
          duration="8 min"
          status="Completed"
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center"
        />
        <LessonCard
          title="Food and Dining"
          subtitle="Essential vocabulary for restaurants and cooking"
          duration="18 min"
          status="Locked"
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop&crop=center"
        />
        <LessonCard
          title="Travel and Transportation"
          subtitle="Navigate confidently in foreign countries"
          duration="20 min"
          status="Locked"
          image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop&crop=center"
        />
      </div>
      <Footer/>
    </div>
  )
}

export default Lessons

