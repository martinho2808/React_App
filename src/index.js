import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; // this allows the css of bootstrap to be used throughout my whole application
import App1 from "./App1";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// un comment below for JSX elements
// ReactDOM.render(
//   <React.StrictMode>
//     <App1 />
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
