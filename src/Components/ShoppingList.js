// import React from "react";
// import InputForm from "./InputForm";

// export default class ShoppingList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       list: this.props.list,
//     };
//   }

//   addItem = (item) => {
//     const list = [...this.state.list, item];
//     this.setState({
//       list: list,
//     });
//   };

//   render() {
//     const shoppingListItems = this.state.list.map((listItem, i) => (
//       <div key={i}>{listItem.item}</div>
//     ));
//     return (
//       <>
//         <InputForm label="Shopping items" addItemProp={this.addItem} />
//         <h3>Shopping List for {this.props.name}</h3>
//         {shoppingListItems}
//       </>
//     );
//   }
// }

// Functional Hook based version

import { useState } from "react";
import InputForm from "./InputForm";

export default function ShoppingList(props) {
  const [list, setList] = useState(props.list);

  // added in new layer so that I can update list properly.
  const handleNewItem = (info) => {
    console.log(info);
    setList(list.concat(info));
  };

  const shoppingListItems = list.map((listItem, i) => (
    <div key={i}>{listItem.item}</div>
  ));
  return (
    <>
      <InputForm label="Shopping Items" addItemProp={handleNewItem} />
      <h3>Shopping List for {props.name}</h3>
      {shoppingListItems}
    </>
  );
}

// Shopping Lists Legacy - no ability to add items, just display prop values
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

// import React from "react";

// export default class ShoppingList extends React.Component {
//   render() {
//     return (
//       <>
//         <h3>Welcome back {this.props.name}</h3>
//         <ul>
//           <li>Bread</li>
//           <li>Bacon</li>
//           <li>Broccoli</li>
//           <li>Bran</li>
//           <li>Bounty Bars</li>
//           <li>Basket Ball</li>
//           <li>Bin</li>
//         </ul>
//       </>
//     );
//   }
// }
