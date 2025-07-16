import React from 'react'
import Navbar from '../../Components/Navbar /Navbar'
import LearningProgress from '../../Components/LearningProgress/LearningProgress'
import LessonCard from '../../Components/LessonCard/LessonCard'
import './Lessons.css';
import Footer from '../../Components/Footer/Footer';

function Lessons() {
  return (
    <div>
    <h1 className='div2'>Language Lessonss</h1>
    <p>Master vocabulary and phrases through structured lessons</p>
    <div>
      <LearningProgress/>
    </div>
    <div className="lesson-grid">
    <LessonCard
        title="Greetings and Introductions"
        subtitle="Learn basic greetings and how to introduce yourself"
        duration="15 min"
        status="Completed"
      />
      <LessonCard
        title="Basic Phrases"
        subtitle="Common phrases for everyday conversations"
        duration="12 min"
        status="In Progress"
      />
      <LessonCard
        title="Numbers and Counting"
        subtitle="Learn how to count and use numbers"
        duration="10 min"
        status="Locked"
      />
      <LessonCard
        title="Days and Months"
        subtitle="Understand days of the week and months"
        duration="8 min"
        status="Completed"
      />
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Lessons

