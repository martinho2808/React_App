// import React from "react";
// export default class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//     this.timerID = {};
//   }
//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }
//   render() {
//     return (
//       <>
//         <h1>Timer</h1>
//         <h2>The time is now: {this.state.date.toLocaleDateString()}</h2>
//       </>
//     );
//   }
// }

import { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  const timerID = {};
  useEffect(() => {
    timerID = setInterval(tick, 1);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <>
      <h1>Timer</h1>
      <h2>The time is now {date.toLocaleTimeString()}</h2>
    </>
  );
}
