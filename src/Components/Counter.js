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

// import React from "react";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h3>
//           {this.state.name !== "" ? this.state.name : this.props.name}'s Counter
//         </h3>
//         {this.state.count}
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={(e) =>
//             this.setState({
//               name: e.target.value,
//             })
//           }
//         />
//         <button className="btn btn-primary" onClick={this.incrementCount}>
//           +
//         </button>
//         <button
//           className="btn btn-danger"
//           onClick={() =>
//             this.setState({
//               count: this.state.count - 1,
//             })
//           }
//         >
//           -
//         </button>
//       </>
//     );
//   }
// }

// export default Counter;
