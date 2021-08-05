import React, { useEffect, useState } from "react";
import Timer from "./Exercise/Timer";
export default function UseEffect2() {
  const [numberOfTimers, setNumberOfTimers] = useState(0);

  const onAddTimer = () => {
    setNumberOfTimers(numberOfTimers + 1);
  };

  const onClearTimer = () => {
    setNumberOfTimers(0);
  };

  const [timers, setTimers] = useState([]);
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < numberOfTimers; i++) {
      newArray.push(<Timer key={i} />);
    }
    setTimers(newArray);
  }, [numberOfTimers]);

  return (
    <div>
      <h1>Create some timers by clicking the button!</h1>
      <button onClick={onAddTimer}>Add Timer</button>
      <button onClick={onClearTimer}>Reset Timer</button>
      {/* Please note that to make sure that React will re-render the page after the
           value in the variable "timers" change, we need to make "timers" a state variable */}
      {timers}
    </div>
  );
}
