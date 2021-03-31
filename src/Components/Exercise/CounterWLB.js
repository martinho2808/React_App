// Class based Counter linked to leaderboard

import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <>
        <h4>
          {this.props.name === "" ? "Counter" : this.props.name + "'s Counter"}{" "}
          : {this.props.count}
        </h4>
        <button className="btn btn-success" onClick={this.props.increment}>
          +
        </button>
        <button className="btn btn-danger" onClick={this.props.decrement}>
          -
        </button>
        <button
          className="btn btn-secondary"
          onClick={this.props.deleteCounter}
        >
          Delete Me
        </button>
      </>
    );
  }
}

// Functional based Counter linked to leaderboard

// export default function Counter(props){
//     return (
//         <>
//         <h4>
//           {props.name === "" ? "Counter" : props.name + "'s Counter"}{" "}
//           : {props.count}
//         </h4>
//         <button className="btn btn-success" onClick={props.increment}>
//           +
//         </button>
//         <button className="btn btn-danger" onClick={props.decrement}>
//           -
//         </button>
//         <button
//           className="btn btn-secondary"
//           onClick={props.deleteCounter}
//         >
//           Delete Me
//         </button>
//       </>
//     )
// }
