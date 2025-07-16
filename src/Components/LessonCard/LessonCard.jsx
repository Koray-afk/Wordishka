import React from 'react';
import './LessonCard.css';

const LessonCard = ({ title, subtitle, duration, status }) => {
  return (
    <div className="lesson-card">
      <div className="card-header">
        <span className="status-badge">{status}</span>
      </div>
      <div className="card-content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <div className="duration">
          <span className="clock-icon">🕒</span>
          <span>{duration}</span>
        </div>
        <button className="review-button">Review Lesson</button>
      </div>
    </div>
  );
};

export default LessonCard;
