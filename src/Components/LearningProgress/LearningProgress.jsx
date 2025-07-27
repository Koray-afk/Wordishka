import React from "react";
import "./LearningProgress.css"; // Import the CSS

const LearningProgress = () => {
  const progressPercent = 25;

  return (
    <div className="progress-card">
      <h1>Your Learning Progress</h1>
      <p>Continue where you left off or start a new lesson</p>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="progress-percent">{progressPercent}%</span>
      </div>

      <div className="progress-stats">
        <div className="stat-box">
          <div className="stat-icon"></div>
          <div className="stat-value">7</div>
          <div className="stat-label">Total Lessons</div>
        </div>
        <div className="stat-box">
          <div className="stat-icon"></div>
          <div className="stat-value">1</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-box">
          <div className="stat-icon"></div>
          <div className="stat-value">3</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-box">
          <div className="stat-icon"></div>
          <div className="stat-value">120</div>
          <div className="stat-label">Points Earned</div>
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;
