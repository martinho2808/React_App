// Class based WhoIsInSpace- LCM

import React from "react";
export default class GetSpaceMan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            people: [...result.people],
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const people =
      this.state.people && this.state.people.length > 0 ? (
        this.state.people.map((person, i) => {
          return (
            <div key={i}>
              {" "}
              <p>{person.name}</p>
            </div>
          );
        })
      ) : (
        <div>
          <p>No space men?</p>
        </div>
      );

    return (
      <>
        <div>
          <br />
          <br />
          <h3>Already have spacemen</h3>
          {people}
        </div>
      </>
    );
  }
}

// Component Did Update

// API who is in space - Hooks

// import { useState } from "react";

// export default function GetSpaceMan(props) {
//   const [spacemen, setSpacemen] = useState([]);

//   function callAPI() {
//     fetch(`http://api.open-notify.org/astros.json`)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           console.log(result);
//           setSpacemen([...result.people]);
//           console.log(spacemen);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }

//   const people =
//     spacemen && spacemen.length > 0 ? (
//       spacemen.map((person, i) => {
//         return (
//           <div key={i}>
//             {" "}
//             <p>{person.name}</p>
//           </div>
//         );
//       })
//     ) : (
//       <div>
//         <p>No space men?</p>
//       </div>
//     );

//   return (
//     <>
//       <div>
//         <br />
//         <br />
//         <h3>Find space men?</h3>
//         <button onClick={callAPI}>Get Men</button>
//         {people}
//       </div>
//     </>
//   );
// }
