// Hook based functional component
import { useState } from "react";
const StatefulComponent = () => {
  const [cohort] = useState(13);
  const [students] = useState(12);
  const [instructors] = useState(["Sam", "Lesley", "Alex"]);
  const [currentAddress] = useState("New Mandarin Plaza, TST East");

  const instructorsDisplay = instructors.map((name, i) => {
    return (
      <div>
        <p key={i}>{name}</p>
      </div>
    );
  });

  return (
    <>
      <h1>
        Welcome Cohort {cohort} to {currentAddress}
      </h1>
      <h3>Number of students: {students}</h3>
      {instructorsDisplay}
    </>
  );
};

export default StatefulComponent;

// // Class based Contains stateful value
// import React from "react";
// class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cohort: 13,
//       students: 12,
//       instructors: ["Sam", "Lesley", "Alex"],
//       currentAddress: "New Mandarin Plaza, TST East",
//     };
//   }

//   render() {
//     console.log(this.state);
//     const instructors = this.state.instructors.map((name, i) => {
//       return (
//         <div>
//           <p key={i}>{name}</p>
//         </div>
//       );
//     });
//     return (
//       <div>
//         <h1>
//           Welcome Cohort {this.state.cohort} to {this.state.currentAddress}
//         </h1>
//         <h3>Number of students: {this.state.students}</h3>
//         {instructors}
//       </div>
//     );
//   }
// }

// export default StatefulComponent;

// Hooks Version of Stateful Component
