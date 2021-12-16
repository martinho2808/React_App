// Functional page component 
import ShoppingList from "../Components/ShoppingList";
import CurrencyConverter from "../Components/CurrencyConverter";
export default function FormCompoentPage(){
  const shopping = [
    { item: "Potato" },
    { item: "Bacon" },
    { item: "Mayonnaise" },
  ];
  return (
    <>
      <ShoppingList list={shopping} name={"Jeremy"} />
      <CurrencyConverter />
    </>
  );
}

// class based page component
// import React from "react";
// import ShoppingList from "../Components/ShoppingList";
// import CurrencyConverter from "../Components/CurrencyConverter";

// export default class FormComponentPage extends React.Component {
//   render() {
//     const shopping = [
//       { item: "Potato" },
//       { item: "Bacon" },
//       { item: "Mayonnaise" },
//     ];
//     return (
//       <>
//         <ShoppingList list={shopping} name={"Jeremy"} />
//         <CurrencyConverter />
//       </>
//     );
//   }
// }
