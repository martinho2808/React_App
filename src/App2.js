import { useState } from "react";
import { DisplayName } from "./DisplayName";

function App2() {
  let [name, setName] = useState("Sam");

  function changeName(name) {
    setName(name);
  }

  return (
    <div>
      <DisplayName changeName={changeName} name={name} />
    </div>
  );
}

export default App2;
