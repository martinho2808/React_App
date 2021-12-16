// hook based functional component
import { useState } from "react";
import Questioner from "../Components/Exercise/Questioner.js";

export default function QuestionerPage(props) {
  const [answer, setAnswer] = useState("");

  function question() {
    setAnswer(prompt("What is your name?"));
  }

  return (
    <>
      <Questioner questionFunc={question} />
      <p>{answer}</p>
    </>
  );
}

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
//       <>
//         <Questioner question="What is your favourite food?" />
//       </>
//     );
//   }
// }
