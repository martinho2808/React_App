import React from "react";
import WhoIsInSpace from "../Components/WhoIsInSpace.js";
import Clock from "../Components/Clock";

export default class LifeCycleMethodPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: false,
    };
  }

  getClock = () => {
    this.setState({
      clock: !this.state.clock,
    });
  };
  render() {
    return (
      <div className="pageContainer">
        <button onClick={this.getClock}>GetClock</button>
        {this.state.clock ? <Clock /> : "No clock"}
        <WhoIsInSpace />
      </div>
    );
  }
}
