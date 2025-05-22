import React from 'react';
import './Searchbar.css';

function Searchbar() {

  const changeWord = async () => {
      try {
          const response = await fetch('https://translator.sandarnecreations.com/api/translate ',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer 9|jURX7cMeYYheIDhv20C8vI7XIhVBT9EViOTQ3qq6a363dc84'
              },
              body: JSON.stringify({
                text: "Hello, how are you?",
                from: "auto",
                to: "es"
              })
            }
          )       
        
          const data = await response.json()
          console.log(data)


      } catch (error) {
          console.log(error)
      }
  }



  return (
    <div className="search-bar">
      <div className="dropdowns">
        <select>
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          <option>Turkish</option>
          <option>Italian</option>
          <option>Japanese</option>
        </select>
        <span>→</span>
        <select>
          <option>Spanish</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>Turkish</option>
        </select>
      </div>
      <div className="input-button">
        <input type="text" placeholder="Enter word to translate" />
        <input type="text" placeholder="Translated word" />
      </div>
        <button className='change-btn' onClick={changeWord}>Search</button>
    </div>
  );
}

export default Searchbar;