import React, { useState } from "react";
import "./Searchbar.css";

function Searchbar() {
  const [data, setData] = useState("");
  const [lang, setLang] = useState("");

  const [loading,setLoading] =  useState(false)

  const [input, setInput] = useState("");
  const changeWord = async () => {
    const apiKey = "AIzaSyBbATc50RsTM7DUCNM6DN9JpcJvKt2wU3w";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `Hey, gemini here is a sentence and I want you to translate into ${lang} language, just return me the answer and nothing else, and the sentence is ${input}`,
            },
          ],
        },
      ],
    };

    try {
      setLoading(true)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": apiKey,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      setData(data?.candidates?.[0]?.content?.parts?.[0]?.text)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-bar">
      <div className="dropdowns">
        <select >
          <option value={"en"}>English</option>
          <option value={"hi"}>Hindi</option>
          <option value={"es"}>Spanish</option>
          <option value={"tr"}>Turkish</option>
          <option value={"it"}>Italian</option>
          <option value={"ja"}>Japanese</option>
        </select>
        <span>→</span>
        <select onChange={(e) => setLang(e.target.value)}>
          <option value={"english"}>English</option>
          <option value={"hindi"}>Hindi</option>
          <option value={"spanish"}>Spanish</option>
          <option value={"turkish"}>Turkish</option>
          <option value={"italian"}>Italian</option>
          <option value={"japanese"}>Japanese</option>
        </select>
      </div>
      <div className="input-button">
        <input
          type="text"
          placeholder="Enter word to translate"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="text" placeholder="Translated word" value={data} />
      </div>
      <button className="change-btn" onClick={changeWord}>
        {loading ? "Translating" : 'Translate'}
      </button>
    </div>
  );
}

export default Searchbar;
