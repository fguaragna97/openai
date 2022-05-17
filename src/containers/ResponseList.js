import React from "react";
import Response from "./Response";

// here we do a map function to show all the list.
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
