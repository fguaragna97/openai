import React from "react";
import Response from "./Response";

function ResponseList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Response prompt={item.prompt} response={item.response} />
      ))}
    </div>
  );
}

export default ResponseList;
