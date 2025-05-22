import React, { useState } from 'react';
import './DictionaryCard.css';

function DictionaryCard() {
  const [activeTab, setActiveTab] = useState('Translation');

  return (
    <div className="dictionary-card">
      <div className="header">
        <div>
          <h1>Hello <span  role="img" aria-label="sound"  style={{ fontSize: '0.7em' }}>📢</span></h1>
          <p className="pronunciation">/həˈloʊ/ • interjection</p>
        </div>
        <button className="btn">Answer</button>
      </div>

      <div className="tabs">
        {['Translation', 'Examples', 'Phrases'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'Translation' && <p className="translation-word">Hola <span role="img" aria-label="sound"  style={{ fontSize: '0.7em' }}>📢</span></p>}
        {activeTab === 'Examples' && <p>We said our goodbyes at the airport..</p>}
        {activeTab === 'Phrases' && <p>Goodbye for now -------
         Adiós por ahora.</p>}
      </div>
    </div>
  );
}

export default DictionaryCard;