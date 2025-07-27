import React, { useState, useEffect } from 'react'
import './Quizzes.css';

const questions = [
  {
    question: 'What is the Spanish word for "apple"?',
    options: ['manzana', 'pera', 'naranja', 'uva'],
    answer: 'manzana',
  },
  {
    question: 'How do you say "thank you" in French?',
    options: ['merci', 'gracias', 'danke', 'ciao'],
    answer: 'merci',
  },
  {
    question: 'What is the German word for "book"?',
    options: ['livre', 'buch', 'libro', 'bucher'],
    answer: 'buch',
  },
  {
    question: 'What is "hello" in Japanese?',
    options: ['konnichiwa', 'sayonara', 'arigato', 'ohayo'],
    answer: 'konnichiwa',
  },
  {
    question: 'How do you say "goodbye" in Italian?',
    options: ['ciao', 'hola', 'bonjour', 'hallo'],
    answer: 'ciao',
  },
  {
    question: 'What is the Portuguese word for "water"?',
    options: ['agua', 'agua', 'wasser', 'eau'],
    answer: 'agua',
  },
  {
    question: 'How do you say "yes" in Russian?',
    options: ['da', 'nyet', 'spasibo', 'privet'],
    answer: 'da',
  },
  {
    question: 'What is "family" in Chinese?',
    options: ['jiā', 'péngyǒu', 'xuéxiào', 'gōngzuò'],
    answer: 'jiā',
  },
  {
    question: 'How do you say "beautiful" in Korean?',
    options: ['yeppeuda', 'annyeong', 'kamsahamnida', 'saranghae'],
    answer: 'yeppeuda',
  },
  {
    question: 'What is the Arabic word for "house"?',
    options: ['bayt', 'madrasa', 'masjid', 'suk'],
    answer: 'bayt',
  },
  {
    question: 'How do you say "friend" in Hindi?',
    options: ['dost', 'bhai', 'beta', 'amma'],
    answer: 'dost',
  },
  {
    question: 'What is "time" in Dutch?',
    options: ['tijd', 'water', 'huis', 'auto'],
    answer: 'tijd',
  }
];


function Quizzes() {
  const getNumber = (key, defaultValue = 0) => {
    const value = localStorage.getItem(key);
    return value !== null ? Number(value) : defaultValue;
  };

  const getBoolean = (key, defaultValue = false) => {
    const value = localStorage.getItem(key);
    return value === "true" ? true : defaultValue;
  };

  const [current, setCurrent] = useState(getNumber("currentProgress", 0));
  const [selected, setSelected] = useState(localStorage.getItem("selected") || null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(getNumber("score", 0));
  const [finished, setFinished] = useState(getBoolean("finished", false));

  useEffect(() => {
    localStorage.setItem("currentProgress", current);
  }, [current]);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    localStorage.setItem("selected", selected || "");
  }, [selected]);

  useEffect(() => {
    localStorage.setItem("finished", finished);
  }, [finished]);

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === questions[current].answer) {
      setScore((prev) => {
        const newScore = prev + 1;
        return newScore;
      });
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelected(null);
    setShowAnswer(false);
    localStorage.clear();
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Excellent! You're a language master!";
    if (percentage >= 80) return "Great job! You're doing really well!";
    if (percentage >= 70) return "Good work! Keep practicing!";
    if (percentage >= 60) return "Not bad! You're on the right track!";
    return "Keep studying! Practice makes perfect!";
  };

  if (finished) {
    return (
      <div className="quiz-container">
        <div className="quiz-complete">
          <h2>Quiz Complete! 🎉</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/{questions.length}</span>
            </div>
            <p className="score-percentage">{Math.round((score / questions.length) * 100)}%</p>
          </div>
          <p className="score-message">{getScoreMessage()}</p>
          <button className="restart-button" onClick={handleRestart}>
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Language Quiz</h2>
        <p>Test your knowledge across multiple languages!</p>
      </div>

      <div className="quiz-progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="quiz-question">
        <div className="question-header">
          <span className="question-number">
            Question {current + 1} of {questions.length}
          </span>
          <span className="current-score">Score: {score}</span>
        </div>

        <h3 className="question-text">{questions[current].question}</h3>

        <div className="quiz-options">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              disabled={showAnswer}
              className={`option-button ${
                showAnswer && option === questions[current].answer
                  ? 'correct'
                  : showAnswer && option === selected
                  ? 'incorrect'
                  : ''
              }`}
            >
              <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>

        {showAnswer && (
          <div className="quiz-feedback">
            <div
              className={`feedback-message ${
                selected === questions[current].answer ? 'correct' : 'incorrect'
              }`}
            >
              {selected === questions[current].answer ? (
                <>
                  <span className="feedback-icon">✅</span>
                  <span>Correct! Well done!</span>
                </>
              ) : (
                <>
                  <span className="feedback-icon">❌</span>
                  <span>Incorrect. The correct answer is "{questions[current].answer}".</span>
                </>
              )}
            </div>
            <button className="next-button" onClick={handleNext}>
              {current < questions.length - 1 ? 'Next Question ➝' : 'Finish Quiz 🏁'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quizzes;