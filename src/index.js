import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; // this allows the css of bootstrap to be used throughout my whole application
import AppExercise from "./AppExerciseDay53.js";
import AppExercise54 from "./AppExerciseDay54.js";

import AppCovid from "./AppCovid.js";

import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// Uncomment below block and comment out above for day54.
ReactDOM.render(
  <Router>
    <AppExercise54 />
  </Router>,
  document.getElementById("root")
);

// Uncomment below block and comment out above for Covid Day 54 - the backend is in a separate repo
// BACKEND LINK EXAMPLE:
// ReactDOM.render(<AppCovid />, document.getElementById("root"));

// uncomment below and comment out above for exercises
// ReactDOM.render(
//   <React.StrictMode>
//     <AppExercise />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// code to implement the JSX element within the React application.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
