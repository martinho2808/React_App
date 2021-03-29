// Functional Component (displays data given to it)

// const ShoppingList = (props) => {
//   return (
//     <>
//       <h3>Welcome back {props.name}</h3>
//       <ul>
//         <li>Bread</li>
//         <li>Bacon</li>
//         <li>Broccoli</li>
//         <li>Bran</li>
//         <li>Bounty Bars</li>
//         <li>Basket Ball</li>
//         <li>Bin</li>
//       </ul>
//     </>
//   );
// };

// export default ShoppingList;

// Class based Component (displaying data given to it)

import React from "react";

export default class ShoppingList extends React.Component {
  render() {
    return (
      <>
        <h3>Welcome back {this.props.name}</h3>
        <ul>
          <li>Bread</li>
          <li>Bacon</li>
          <li>Broccoli</li>
          <li>Bran</li>
          <li>Bounty Bars</li>
          <li>Basket Ball</li>
          <li>Bin</li>
        </ul>
      </>
    );
  }
}
