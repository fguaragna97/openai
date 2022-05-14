import React from "react";
import "./App.css";
import ResponseList from "./containers/ResponseList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fun with AI</h1>
        <p>Enter prompt</p>
      </header>
      <div>
        <input className="input"></input>
      </div>
      <div className="button-wrapper">
        <button className="button">Submit</button>
      </div>
      <h1>Responses</h1>
      <ResponseList />
    </div>
  );
}

export default App;
