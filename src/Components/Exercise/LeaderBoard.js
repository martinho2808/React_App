// Leaderboard using react hooks
import RandomName from "node-random-name";
import { useState } from "react";
import Counter from "./CounterWLB";

export default function LeaderBoard() {
  const [counters, setCounters] = useState([
    { name: RandomName({ seed: Math.random() }), count: 0 },
    { name: RandomName(), count: 2 },
  ]);

  // Exercise C
  const addCounter = () => {
    let newCounterArray = counters.concat([
      { name: RandomName({ seed: Math.random() }), count: 0 },
    ]);
    setCounters(newCounterArray);
  };

  const removeCounter = (i) => {
    let newObj = [...counters];
    newObj.splice(i, 1);
    setCounters(newObj);
  };

  const handleClickPlus = (i) => {
    let newObj = { ...counters[i], count: counters[i].count + 1 };
    let newArray = [...counters];
    newArray[i] = newObj;
    setCounters(newArray);
  };

  const handleClickMinus = (i) => {
    let newObj = { ...counters[i], count: counters[i].count - 1 };
    let newArray = [...counters];
    newArray[i] = newObj;
    setCounters(newArray);
  };

  const renderCounter = (i, name, count) => {
    return (
      <Counter
        count={count}
        name={name}
        key={i}
        decrement={() => handleClickMinus(i)}
        increment={() => handleClickPlus(i)}
        deleteCounter={() => removeCounter(i)}
      />
    );
  };

  const sortedData = []
    .concat(counters)
    .sort((a, b) => b.count - a.count)
    .map((item, i) => <div key={i}>{item.name}</div>);

  console.log(counters);

  return (
    <>
      <div>
        <button onClick={addCounter}> Add Counter</button>
      </div>
      {counters && counters.length > 0
        ? counters.map((counter, index) =>
            renderCounter(index, counter.name, counter.count)
          )
        : "No counters"}
      <div>
        <br />
        <br />
        <br />
        <h3>LeaderBoard</h3>
        {sortedData}
      </div>
    </>
  );
}

// Class based implementation
// import RandomName from "node-random-name";
// import React from "react";
// import Counter from "./CounterWLB";

// export default class LeaderBoard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counters: [
//         { name: RandomName({ seed: Math.random() }), count: 0 },
//         { name: RandomName(), count: 2 },
//       ],
//     };
//   }

//   // Exercise C
//   addCounter = () => {
//     // This is wrong as it doesn't respect immutability
//     // newCounterArray.push({ name: RandomName({ seed: Math.random() }), count: 0 })

//     // handles immutability
//     let newCounterArray = this.state.counters.concat([
//       { name: RandomName({ seed: Math.random() }), count: 0 },
//     ]);

//     this.setState({
//       counters: newCounterArray,
//     });
//   };

//   removeCounter = (i) => {
//     /*
//       filter method also possible
//       let newArray = [...this.state.counters]
//       newArray = newArray.filter((item, index)=> index ! == i)
//       this.setState({
//           counters: newArray
//       })
//       */

//     // handles immutability
//     // create a new array of the counters, removes the indexed counter from the new array, set the new array as the counters array
//     let newObj = [...this.state.counters];
//     newObj.splice(i, 1);
//     this.setState({
//       counters: newObj,
//     });
//   };

//   handleClickMinus = (i) => {
//     console.log(i);
//     console.log(this.state.counters[i].name);
//     // handle immutability
//     let newObj = {
//       ...this.state.counters[i],
//       count: this.state.counters[i].count - 1,
//     };
//     let newArray = this.state.counters;
//     newArray[i] = newObj;
//     this.setState({
//       counters: newArray,
//     });
//   };

//   handleClickPlus = (i) => {
//     let newObj = {
//       ...this.state.counters[i],
//       count: this.state.counters[i].count + 1,
//     };
//     let newArray = this.state.counters;
//     newArray[i] = newObj;
//     this.setState({
//       counters: newArray,
//     });
//   };

//   renderCounter = (i, name, count) => {
//     return (
//       <Counter
//         count={count}
//         name={name}
//         key={i}
//         decrement={() => this.handleClickMinus(i)}
//         increment={() => this.handleClickPlus(i)}
//         deleteCounter={() => this.removeCounter(i)}
//       />
//     );
//   };

//   render() {
//     // Exercise B
//     const sortedData = []
//       .concat(this.state.counters)
//       .sort((a, b) => b.count - a.count)
//       .map((item, i) => <div key={i}> {item.name}</div>);

//     return (
//       <>
//         <div>
//           <button className="btn btn-primary" onClick={this.addCounter}>
//             {" "}
//             Add Counter
//           </button>
//         </div>
//         {this.state.counters
//           .sort((a, b) => b.count - a.count)
//           .map((counter, i) =>
//             this.renderCounter(i, counter.name, counter.count)
//           )}
//         <div>
//           <br />
//           <br />
//           <br />
//           <h3>LeaderBoard</h3>
//           {sortedData}
//         </div>
//       </>
//     );
//   }
// }
