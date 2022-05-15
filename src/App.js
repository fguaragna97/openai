import React, { useState } from "react";
import "./App.css";
import ResponseList from "./containers/ResponseList";

function App() {
  const [data, setData] = useState([
    { prompt: "Essay of aliens", response: "XXXXX ALIENS" },
    { prompt: "Essay of Elepahtns", response: "XXXXX Elepahtns" },
  ]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt = event.target.elements.prompt.value;

    const response = await {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      },
      body: JSON.stringify(response),
    });

    console.log(response);
  };

  return (
    <div className="App">
      <header>
        <h1>Fun with AI</h1>
        <p>Enter prompt</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <input className="input" name="prompt"></input>
        </div>
        <div className="button-wrapper">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <h1>Responses</h1>
      <ResponseList data={data} />
    </div>
  );
}

export default App;
