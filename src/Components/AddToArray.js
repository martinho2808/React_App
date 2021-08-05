import React, { useState } from "react";

export default function AddToCompositeState() {
  const [array, setArray] = useState(["one"]);
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newArray = array;
    newArray.push(input);
    setArray(newArray);
    setInput("");
  }
  function handleInput(event) {
    setInput(event.target.value);
  }
  return (
    <div>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {input}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Add To Array"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
