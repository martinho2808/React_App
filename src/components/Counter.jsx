// Hook based Counter Component
import { useState } from "react";
const Counter = (props) => {
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>{props.name}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h3>{count}</h3>
    </>
  );
};

// Class based counter component
// import React from 'react';

// class Counter extends React.Component {
//     constructor(props){
//       super(props)
//       this.state={
//         count: 0
//       }
//     }

//     increaseCount (){
//       this.setState({count: this.state.count +1 })
//     }

//     render(){
//       return (
//         <div>
//           <h1>{this.props.name}</h1>
//           <button onClick={()=>this.increaseCount()}>Click Me</button>
//           <h3>{this.state.count}</h3>
//         </div>
//       )
//     }
//   }

export default Counter;
