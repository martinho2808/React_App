// Functional Hook based Currency Converter

import { useState } from "react";

export default function CurrencyConverter() {
  const [currencies, setCurrencies] = useState({
    USD: 1,
    HKD: 7.77,
    GBP: 0.73,
  });

  return (
    <>
      <h4>Currency Converter</h4>
      <label>HKD:</label>
      <input
        name="hkd"
        value={currencies.HKD}
        onChange={(e) =>
          setCurrencies({
            HKD: e.currentTarget.value,
            USD: e.currentTarget.value * 0.13,
            GBP: e.currentTarget.value * 0.093,
          })
        }
      />
      <br />
      <br />
      <label>USD:</label>
      <input
        name="usd"
        value={currencies.USD}
        onChange={(e) =>
          setCurrencies({
            HKD: e.currentTarget.value * 7.77,
            USD: e.currentTarget.value,
            GBP: e.currentTarget.value * 0.73,
          })
        }
      />
      <br />
      <br />
      <label>GBP:</label>
      <input
        name="gbp"
        value={currencies.GBP}
        onChange={(e) =>
          setCurrencies({
            HKD: e.currentTarget.value * 10.71,
            USD: e.currentTarget.value * 1.138,
            GBP: e.currentTarget.value,
          })
        }
      />
      <br />
      <br />
    </>
  );
}

// Class based component
// import React from "react";

// export default class CurrencyConverter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       HKD: 7.77,
//       USD: 1,
//       GBP: 0.73,
//     };
//   }

//   calculateDifferences = (e) => {
//     if (e.currentTarget.name === "hkd") {
//       this.setState({
//         HKD: e.currentTarget.value,
//         USD: e.currentTarget.value * 0.13,
//         GBP: e.currentTarget.value * 0.093,
//       });
//     }

//     if (e.currentTarget.name === "usd") {
//       this.setState({
//         USD: e.currentTarget.value,
//         HKD: e.currentTarget.value * 7.77,
//         GBP: e.currentTarget.value * 0.73,
//       });
//     }

//     if (e.currentTarget.name === "gbp") {
//       this.setState({
//         GBP: e.currentTarget.value,
//         HKD: e.currentTarget.value * 10.71,
//         USD: e.currentTarget.value * 1.138,
//       });
//     }
//   };

//   render() {
//     return (
//       <>
//         <h4>Currency Converter</h4>
//         <label>HKD:</label>
//         <input
//           name="hkd"
//           value={this.state.HKD}
//           onChange={this.calculateDifferences}
//         />
//         <br />
//         <br />
//         <label>USD:</label>
//         <input
//           name="usd"
//           value={this.state.USD}
//           onChange={this.calculateDifferences}
//         />
//         <br />
//         <br />
//         <label>GBP:</label>
//         <input
//           name="gbp"
//           value={this.state.GBP}
//           onChange={this.calculateDifferences}
//         />
//         <br />
//         <br />
//       </>
//     );
//   }
// }
