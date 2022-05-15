import React from "react";

function Response({ prompt, response }) {
  return (
    <div className="response">
      <div className="left">
        <h2>Prompt:</h2>
        <h2>Response:</h2>
      </div>
      <div className="right">
        <p>{prompt}</p>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Response;
