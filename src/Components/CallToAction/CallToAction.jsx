// CallToAction.jsx
import React, { useState, useEffect } from 'react';
import './CallToAction.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function CallToAction() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = () => {
    navigate('/sign');
  };

  // Don't show the sign up section if user is already authenticated
  if (user) {
    return null;
  }

  return (
    <div className="cta-section">
      <h1>Ready to start your language journey?</h1>
      <p>Join millions of learners worldwide and master a new language today.</p>
      <div className="cta-buttons">
        <button className="cta-button" onClick={handleSignUp}>Sign up - It's free</button>
      </div>
    </div>
  );
}

export default CallToAction;