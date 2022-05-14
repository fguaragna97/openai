import React from "react";
import Response from "./Response";

function ResponseList() {
  const data = [
    { prompt: "Essay of aliens", Response: "XXXXX ALIENS" },
    { prompt: "Essay of Elepahtns", Response: "XXXXX Elepahtns" },
  ];

  return (
    <div>
      <Response />
    </div>
  );
}

export default ResponseList;
