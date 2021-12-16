// Functional hook based component

import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{props.name}'s Counter</h3>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment me</button>
      <button onClick={() => setCount(count - 1)}>Decrement me</button>
    </>
  );
}

export default Counter;

// Class based component
// import React from "react";

// export default class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   handleIncrement = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   handleDecrement = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h3>{this.props.name}'s Counter</h3>
//         <div>{this.state.count}</div>
//         <button onClick={this.handleIncrement}>Increment me</button>
//         <button onClick={this.handleDecrement}>Decrement me</button>
//       </>
//     );
//   }
// }
