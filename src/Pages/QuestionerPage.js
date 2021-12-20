// Functional based component
import Questioner from "../Components/Exercise/Questioner.js";
import { useState } from "react";

export default function QuestionerPage() {
  let [answer, setAnswer] = useState("");
  function question() {
    setAnswer(prompt("What is your favourite food>"));
  }

  return (
    <div className="pageContainer">
      <Questioner question={question} />
      <p>{answer}</p>
    </div>
  );
}

// Class Based Component
// import React from "react";
// import Questioner from "../Components/Exercise/Questioner.js";

// export default class QuestionerPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       answer: "",
//     };
//   }

//   render() {
//     return (
//       <div className="pageContainer">
//         <Questioner question="What is your favourite food?" />
//       </div>
//     );
//   }
// }
