import React from 'react';
import './Features.css';
import barchart from '../../assets/bar-chart.png';
import book from '../../assets/book.png';
import planet from '../../assets/planet-earth.png';
import badge from '../../assets/premium-badge.png';

const features = [
  {
    icon: book,
    title: 'Vocabulary & Phrases',
    description: 'Comprehensive dictionary with thousands of words and useful phrases',
  },
  {
    icon: planet,
    title: 'Multiple Languages',
    description: 'Learn over 30 languages with native speaker pronunciations',
  },
  {
    icon: badge,
    title: 'Interactive Quizzes',
    description: 'Test your knowledge with adaptive quizzes that grow with you',
  },
  {
    icon: barchart,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed statistics',
  },
];

function Features() {
  return (
    <div className="feature-section">
      {features.map((value, index) => (
        <div className="feature-card" key={index}>
          <div className="icon-circle">
            <img src={value.icon} alt={value.title} className="icon-image" />
          </div>
          <h3 className="title">{value.title}</h3>
          <p className="description">{value.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;