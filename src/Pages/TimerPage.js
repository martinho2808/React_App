// class based page for timer
import React from "react";
import Timer from "../Components/Exercise/Timer.js";

export default class TimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfTimers: 0,
    };
  }

  onAddTimer = () => {
    this.setState({
      numberOfTimers: this.state.numberOfTimers + 1,
    });
  };

  onClearTimers = () => {
    this.setState({
      numberOfTimers: 0,
    });
  };

  render() {
    const timers = [];
    for (let i = 0; i < this.state.numberOfTimers; i++) {
      timers.push(<Timer key={i} />);
    }

    return (
      <div>
        <h1> Create some timers by clicking on Add Timer the button below</h1>
        <button className="btn btn-primary" onClick={this.onAddTimer}>
          Add Timer
        </button>
        <button className="btn btn-danger" onClick={this.onClearTimers}>
          Clear Timers
        </button>
        {timers}
      </div>
    );
  }
}

// Functional Hook based page
// import { useState } from "react";
// import Timer from "../Components/Exercise/Timer.js";

// export default function TimerPage() {
//   const [numberOfTimers, setNumberOfTimers] = useState(0);

//   const timers = [];
//   for (let i = 0; i < numberOfTimers; i++) {
//     timers.push(<Timer key={i} />);
//   }

//   return (
//     <>
//       <h1>Create some timers by clicking the button below</h1>
//       <button
//         className="btn btn-primary"
//         onClick={() => setNumberOfTimers(numberOfTimers + 1)}
//       >
//         Add Timer
//       </button>{" "}
//       <button className="btn btn-danger" onClick={() => setNumberOfTimers(0)}>
//         Clear Timers
//       </button>
//       {timers}
//     </>
//   );
// }
