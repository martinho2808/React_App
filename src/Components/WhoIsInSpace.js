// API who is in space - Hooks --> load when button is clicked

import { useState } from "react";

export default function GetSpaceMan(props) {
  const [spacemen, setSpacemen] = useState([]);

  function callAPI() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setSpacemen([...result.people]);
          console.log(spacemen);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const people =
    spacemen && spacemen.length > 0 ? (
      spacemen.map((person, i) => {
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
        <h3>Find space men?</h3>
        <button onClick={callAPI}>Get Men</button>
        {people}
      </div>
    </>
  );
}

// Class based WhoIsInSpace- LCM --> fetch on load

// import React from "react";
// export default class GetSpaceMan extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       people: [],
//     };
//   }

//   componentDidMount() {
//     fetch(`http://api.open-notify.org/astros.json`)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           console.log(result);
//           this.setState({
//             people: [...result.people],
//           });
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }

//   render() {
//     const people =
//       this.state.people && this.state.people.length > 0 ? (
//         this.state.people.map((person, i) => {
//           return (
//             <div key={i}>
//               {" "}
//               <p>{person.name}</p>
//             </div>
//           );
//         })
//       ) : (
//         <div>
//           <p>No space men?</p>
//         </div>
//       );

//     return (
//       <>
//         <div>
//           <br />
//           <br />
//           <h3>Already have spacemen</h3>
//           {people}
//         </div>
//       </>
//     );
//   }
// }

// example connecting to backend - Hook

// import { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   let [users, setUsers] = useState([{ name: "Sam" }, { name: "Lesley" }]);

//   const getData = () => {
//     axios.get(`${process.env.REACT_APP_API_SERVER}/api/user`).then((data) => {
//       setUsers(data.data);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   console.log(users);
//   return (
//     <div className="App">
//       <h1> Simple Backend Data Fetch</h1>
//       <ul>
//         {users && users.length > 0
//           ? users.map((user, index) => (
//               <li key={index}> {user && user.name}</li>
//             ))
//           : ""}
//       </ul>
//     </div>
//   );
// };

// export default App;

// example connecting to backend - class based

//import React from "react";
// import axios from "axios";
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       users: [{ name: "Sam" }, { name: "Lesley" }],
//     };
//   }

//   getData = () => {
//     axios.get(`${process.env.REACT_APP_API_SERVER}/api/user`).then((data) => {
//       this.setState({
//         users: data,
//       });
//     });
//   };

//   render() {
//     this.getData();
//     return (
//       <div className="App">
//         <h1> Simple Backend Data Fetch</h1>
//         <ul>
//           {this.state.users &&
//             this.state.users.map((user, index) => (
//               <li key={index}> {user && user.name}</li>
//             ))}
//         </ul>
//       </div>
//     );
//   }
// }
