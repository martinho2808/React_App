// Exercise A - class based

// import React from "react";

// export default class Questioner extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       answer: "",
//     };
//   }

//   query = () => {
//     const userInput = prompt(this.props.question);
//     if (userInput === null) {
//       this.setState({
//         answer: "Click again and input an answer please.",
//       });
//     } else {
//       this.setState({
//         answer: userInput,
//       });
//     }
//     return true;
//   };

//   render() {
//     return (
//       <>
//         <button className="btn btn-primary" onClick={this.query}>
//           Questioner
//         </button>
//         <p>{this.state.answer}</p>
//       </>
//     );
//   }
// }

// Exercise A Hooks example

// import { useState } from 'react';

// export default function Questioner(props){
//     const [answer, setAnswer] = useState('');

//     const query = ()=> {
//         const userInput = prompt(props.question)
//         if(userInput === null){
//           setAnswer('Please click again and input an answer')
//         } else {
//             setAnswer(userInput)
//         } return
//     }

//     return (
//         <>
//         <button className="btn btn-primary" onClick={()=> query}>Questioner</button>
//         <p>{answer}</p>
//         </>
//     )
// }

export default function Questioner(props) {
  return (
    <>
      <button onClick={props.questionFunc}>Click me for a question! </button>
    </>
  );
}
