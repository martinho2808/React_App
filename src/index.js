import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

// Fastest way of doing things, not necessarily the conventional way , dispatch an action to the store before components are meant to mount

// import axios from "axios";
// axios.get("https://www.reddit.com/r/programming.json").then((response) => {
//   let threads = response.data;

//   let redditLinks = threads.data.children.map((link) => ({
//     title: link.data.title,
//     url: link.data.url,
//   }));

//   console.log(redditLinks);

//   store.dispatch({
//     type: LOAD_LINK_SUCCESS_ACTION,
//     payload: redditLinks,
//   });
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
