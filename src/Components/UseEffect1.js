import React, { useEffect, useState } from "react";
const Class = [
  "Shandy",
  "Candice",
  "Joyce",
  "Brian",
  "Ivan",
  "Gabe",
  "Kelvin",
  "Arthur",
  "Zach",
  "Tommy",
];
export default function UseEffect1() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(Class[index]);
  // The first question to ask is:
  // Do I need to constantly rerender this? Does it correspond to a state change? In this case, yes, so leave the second parameter blank
  useEffect(() => {
    console.log("re-render");
    document.title = Class[index];
    setName(Class[index]);
  });
  function updateClass() {
    setIndex(Math.floor(Math.random() * Class.length));
  }
  return (
    <div>
      {name}
      <h1>Use Effect: Render Many Times</h1>
      <p>Understanding the second parameter in use effect</p>
      <button onClick={updateClass}>Change Title</button>
      <p>{index}</p>
    </div>
  );
}
