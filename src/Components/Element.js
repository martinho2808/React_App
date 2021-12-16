// Contains reference to a prop value
// This is a Functional component
function Element(props) {
  console.log(props);
  return (
    <>
      <h2>
        Welcome to the page, this element has been added into the App component
      </h2>

      <p>{props.name}</p>
    </>
  );
}
export default Element;

// // This is a React Class
// import React from "react";
// class Element extends React.Component {
//   render() {
//     console.log(this.props);

//     return (
//       // You can only have one parent element in this return statement.
//       <>
//         <h2>
//           Welcome to the page, this element has been added into the App
//           component
//         </h2>

//         <p>{this.props.name}</p>
//       </>
//     );
//   }
// }

// export default Element;
