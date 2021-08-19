import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; // this allows the css of bootstrap to be used throughout my whole application
import AppExercise from "./AppExercise.js";

ReactDOM.render(<App />, document.getElementById("root"));

// uncomment below and comment out above for exercises
// ReactDOM.render(
//   <React.StrictMode>
//     <AppExercise />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// code to implement the JSX element within the React application.

// import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
// import { newElement } from "./JSXelements/JSXelement";

// ReactDOM.render(newElement, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
