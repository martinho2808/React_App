// Contains stateful value
import React from "react";
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort: 16,
      students: 3,
      instructors: ["Sam", "Bibek"],
      currentAddress: "Cocoon Tin Hau",
    };
  }

  render() {
    console.log(this.state);
    const instructors = this.state.instructors.map((name, i) => {
      return (
        <div>
          <p key={i}>{name}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>
          Welcome Cohort {this.state.cohort} to {this.state.currentAddress}
        </h1>
        <h3>Number of students: {this.state.students}</h3>
        {instructors}
      </div>
    );
  }
}

// Hooks Version of Stateful Component
// import { useState } from "react";
// const StatefulComponent = () => {
//   const [cohort, setcohort] = useState(13);
//   const [students, setstudents] = useState(12);
//   const [instructors, setInstructor] = useState(["Sam", "Lesley", "Alex"]);
//   const [currentAddress, setCurrentAddress] = useState(
//     "New Mandarin Plaza, TST East"
//   );

//   const instructorsDisplay = instructors.map((name, i) => {
//     <div>
//       <p key={i}>{name}</p>
//     </div>;
//   });

//   return (
//     <>
//       <h1>
//         Welcome Cohort {cohort} to {currentAddress}
//       </h1>
//       <h3>Number of students: {students}</h3>
//       {instructors}
//     </>
//   );
// };

export default StatefulComponent;
