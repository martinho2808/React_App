import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <h3>{name !== "" ? name : props.name}'s Counter</h3>
      <div>{count}</div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increment me</button>
      <button onClick={() => setCount(count - 1)}>Decrement me</button>
    </>
  );
}

export default Counter;

// class based code
// import React from "react";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };

//     this.incrementCount = this.incrementCount.bind(this);
//   }

//   incrementCount() {
//     console.log(this);
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   decrementCount = () => {
//     console.log(this);
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1> Counter for {this.props.name} </h1>
//         <div>
//           <button onClick={this.incrementCount}>+</button>
//           <button onClick={this.decrementCount}>-</button>
//         </div>
//         <h4>{this.state.count}</h4>
//       </>
//     );
//   }
// }

// export default Counter;
