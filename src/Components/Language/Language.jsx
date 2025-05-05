import React, { useState } from 'react';
import './Language.css';

const languages = [
  { name: 'Spanish', flag: '🇪🇸', popular: true },
  { name: 'French', flag: '🇫🇷', popular: true },
  { name: 'German', flag: '🇩🇪', popular: true },
  { name: 'Italian', flag: '🇮🇹', popular: true },
  { name: 'Portuguese', flag: '🇵🇹', popular: true },
  { name: 'Japanese', flag: '🇯🇵', popular: true },
  { name: 'Chinese', flag: '🇨🇳', popular: true },
  { name: 'Korean', flag: '🇰🇷', popular: true },
  { name: 'Russian', flag: '🇷🇺', popular: true },
  { name: 'Arabic', flag: '🇸🇦', popular: true },
  { name: 'Hindi', flag: '🇮🇳', popular: true },
  { name: 'Dutch', flag: '🇳🇱', popular: false },
  { name: 'Swedish', flag: '🇸🇪', popular: false },
  { name: 'Polish', flag: '🇵🇱', popular: false },
  { name: 'Turkish', flag: '🇹🇷', popular: false },
];

function Language() {
  const [search, setSearch] = useState('');

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="language-container">
      <input
        type="text"
        placeholder="Search languages..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="language-grid">
        {filteredLanguages.map((language, index) => (
          <div className="language-card" key={index}>
            <div className="flag">{language.flag}</div>
            <div className="name">{language.name}</div>
            {language.popular && <div className="popular">Popular</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Language;