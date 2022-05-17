import React from "react";
import Response from "./Response";

function ResponseList({ data }) {
  return (
    <>
      {data.map((item) => (
        <Response key={item.id} prompt={item.prompt} response={item.response} />
      ))}
    </>
  );
}

export default ResponseList;
