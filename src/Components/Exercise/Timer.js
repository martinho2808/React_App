// Hook based timer component
import { useState, useEffect } from "react";

export default function Timer(props) {
  const [elapsed, setElapsed] = useState(0);
  let startTime;
  let timer = {};

  const tick = () => {
    setElapsed(Date.now() - startTime);
  };

  // acts as all lifecycle methods, component did mount, component did update and componentwillunmount.
  useEffect(() => {
    startTime = Date.now();
    timer = setInterval(tick, 1);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>Time Elapsed: {(elapsed / 1000).toFixed(3)}s</p>
    </>
  );
}

// Class based timer component

// import React from "react";

// export default class Timer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       elapsed: 0,
//     };
//   }

//   componentDidMount() {
//     this.startTime = Date.now();
//     this.timer = setInterval(this.tick, 1);
//   }

//   tick = () => {
//     this.setState({
//       elapsed: Date.now() - this.startTime,
//     });
//   };

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <>
//         <p>Time Elapsed: {(this.state.elapsed / 1000).toFixed(3)}s</p>
//       </>
//     );
//   }
// }
