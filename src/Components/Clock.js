import React from "react";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.timerID = {};
  }
  componentDidMount() {
    console.log("Mounting");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    console.log("unmounting");
    clearInterval(this.timerID);
  }
  componentDidUpdate() {
    console.log("remounting?");
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <>
        <h1>Timer</h1>
        <h2>The time is now: {this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}

// import { useState, useEffect } from "react";

// export default function Clock() {
//   const [date, setDate] = useState(new Date());

//   function tick() {
//     setDate(new Date());
//   }

//   useEffect(() => {
//     const timerID = setInterval(tick, 1);
//     console.log("Mounting");

//     return () => {
//       clearInterval(timerID);
//       console.log("UnMounting");
//     };
//   });

//   return (
//     <>
//       <h1>Timer</h1>
//       <h2>The time is now {date.toLocaleTimeString()}</h2>
//     </>
//   );
// }
