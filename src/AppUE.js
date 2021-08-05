import React from "react";
import UseEffect1 from "./Components/UseEffect1";
import Timer from "./Components/Exercise/Timer";
import UseEffect2 from "./Components/UseEffect2";
import UseEffect3 from "./Components/UseEffect3";

export default class App extends React.Component {
  render() {
    return (
      <>
        <UseEffect1 />
        <Timer />
        <UseEffect2 />
        <UseEffect3 />
      </>
    );
  }
}
