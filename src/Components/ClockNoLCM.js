// Class based Clock Component

import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    const currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      ampm = hours >= 12 ? "PM" : "AM";

    this.state = {
      currentTime,
      hours,
      minutes,
      seconds,
      ampm,
    };

    this.updateClock = this.updateClock.bind(this);
  }

  updateClock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    this.setState({
      currentTime,
      hours,
      minutes,
      seconds,
      ampm,
    });
  }

  componentWillUnmount() {
    clearInterval(this.updateClock);
  }

  start() {
    setInterval(this.updateClock, 1000);
  }

  render() {
    const { hours, minutes, seconds, ampm } = this.state;
    this.start();
    return (
      <>
        {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:{" "}
        {minutes > 9 ? minutes : `0${minutes}`}:{" "}
        {seconds > 9 ? seconds : `0${seconds}`} {ampm}
      </>
    );
  }
}

// Hook Based Clock component
// import { useState, useEffect } from "react";

// const Clock = () => {
//   const currentTime = new Date();

//   const [hours, setHours] = useState(currentTime.getHours());
//   const [minutes, setMinutes] = useState(currentTime.getMinutes());
//   const [seconds, setSeconds] = useState(currentTime.getSeconds());
//   const day = hours >= 12 ? "PM" : "AM";
//   const [ampm, setAmpm] = useState(day);

//   useEffect(() => {
//     const interval = setInterval(updateClock, 1000);
//     return function cleanup() {
//       clearInterval(interval);
//     };
//   });

//   function updateClock() {
//     const currentTime = new Date(),
//       day = hours >= 12 ? "PM" : "AM";
//     setHours(currentTime.getHours());
//     setMinutes(currentTime.getMinutes());
//     setSeconds(currentTime.getSeconds());
//     setAmpm(day);
//   }
//   return (
//     <>
//       {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:{" "}
//       {minutes > 9 ? minutes : `0${minutes}`}:{" "}
//       {seconds > 9 ? seconds : `0${seconds}`} {ampm}
//     </>
//   );
// };

// export default Clock;
