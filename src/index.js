import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; // this allows the css of bootstrap to be used throughout my whole application
import AppExercise54 from "./AppExerciseDay54.js";
import AppExercise53 from "./AppExerciseDay53.js";
import AppUE from "./AppUE";
import AppCovid from "./AppCovid.js";

import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <AppCovid />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// Uncomment below block and comment out above for day54.
ReactDOM.render(
  <BrowserRouter>
    <AppExercise54 />
  </BrowserRouter>,
  document.getElementById("root")
);

// Uncomment below block and comment out above for Covid Day 54 - the backend is in a separate repo
// BACKEND LINK EXAMPLE:
// ReactDOM.render(<AppCovid />, document.getElementById("root"));

// use effect examples
// ReactDOM.render(
//   <React.StrictMode>
//     <AppUE />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// uncomment below and comment out above for exercises --> change the number to see the various daily exercises
// ReactDOM.render(
//   <React.StrictMode>
//     <AppExercise53 />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// code to implement the JSX element within the React application.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
