import React, { useEffect, useState } from "react";
export default function UseEffectData() {
  const [kanye, setKanye] = useState("");
  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setKanye(parsedResponse.quote);
      });
  }, []);
  return (
    <div>
      <h1>Use Effect: Fetching Data</h1>
      <p>Steps in using useEffect to fetch data</p>
      <h4>Quote</h4>
      <h4>{kanye}</h4>
    </div>
  );
}
