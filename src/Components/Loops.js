// Functional Component to display data - using loops in react - users defined here
const Loops = () => {
  const array = [
    { name: "Andy", age: 26, nationality: "Chinese" },
    { name: "Bibek", age: 20, nationality: "Nepalese" },
    { name: "Lesley", age: 26, nationality: "Hong Kong" },
    { name: "Sam", age: 28, nationality: "British" },
  ];

  return (
    <>
      <h1>Xccelerate Software Engineers</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {array.map((value, index) => {
          return (
            <div
              style={{ padding: "40px", border: "2px solid #ff0000" }}
              key={index}
            >
              <h3>User:</h3>
              <p>{value.name}</p>
              <h3>Age:</h3>
              <p>{value.age}</p>
              <h3>Nationality:</h3>
              <p>{value.nationality}</p>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Loops;

// Functional Component to display data - using loops in react - users defined here
// const Loops = (props) => {
//   console.log(props);
//   return (
//     <>
//       <h1>Xccelerate Software Engineers</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//         }}
//       >
//         {props.array.map((value, index) => {
//           return (
//             <div
//               style={{ padding: "40px", border: "2px solid #ff0000" }}
//               key={index}
//             >
//               <h3>User:</h3>
//               <p>{value.name}</p>
//               <h3>Age:</h3>
//               <p>{value.age}</p>
//               <h3>Nationality:</h3>
//               <p>{value.nationality}</p>
//               <br />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Loops;

// Class Component to display some data - using loops in react - users defined here
// import React from "react";

// export default class Loops extends React.Component {
//   render() {
//     const array = [
//       { name: "Andy", age: 26, nationality: "Chinese" },
//       { name: "Bibek", age: 20, nationality: "Nepalese" },
//       { name: "Lesley", age: 26, nationality: "Hong Kong" },
//       { name: "Sam", age: 28, nationality: "British" },
//     ];
//     return (
//       <>
//         {" "}
//         <h1>Xccelerate Software Engineers</h1>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//           }}
//         >
//           {array.map((value, index) => {
//             return (
//               <div
//                 style={{ padding: "40px", border: "2px solid #ff0000" }}
//                 key={index}
//               >
//                 <h3>User:</h3>
//                 <p>{value.name}</p>
//                 <h3>Age:</h3>
//                 <p>{value.age}</p>
//                 <h3>Nationality:</h3>
//                 <p>{value.nationality}</p>
//                 <br />
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

// Class Component to display some data - using loops in react - users defined here
// import React from "react";

// export default class Loops extends React.Component {
//   render() {
//     console.log("PROPS", this.props);
//     return (
//       <>
//         {" "}
//         <h1>Xccelerate Software Engineers</h1>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//           }}
//         >
//           {this.props.array && this.props.array.length > 0
//             ? this.props.array.map((value, index) => {
//                 return (
//                   <div
//                     style={{ padding: "40px", border: "2px solid #ff0000" }}
//                     key={index}
//                   >
//                     <h3>User:</h3>
//                     <p>{value.name}</p>
//                     <h3>Age:</h3>
//                     <p>{value.age}</p>
//                     <h3>Nationality:</h3>
//                     <p>{value.nationality}</p>
//                     <br />
//                   </div>
//                 );
//               })
//             : ""}
//         </div>
//       </>
//     );
//   }
// }
