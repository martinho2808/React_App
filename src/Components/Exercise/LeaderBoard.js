import RandomName from "node-random-name";
import React from "react";
import Counter from "./Counter";

export default class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { name: RandomName({ seed: Math.random() }), count: 0 },
        { name: RandomName(), count: 2 },
      ],
    };
  }

  // Exercise C
  addCounter = () => {
    // This is wrong as it doesn't respect immutability
    // newCounterArray.push({ name: RandomName({ seed: Math.random() }), count: 0 })

    // handles immutability
    let newCounterArray = this.state.counters.concat([
      { name: RandomName({ seed: Math.random() }), count: 0 },
    ]);

    this.setState({
      counters: newCounterArray,
    });
  };

  removeCounter = (i) => {
    /*
      filter method also possible
      let newArray = [...this.state.counters]
      newArray = newArray.filter((item, index)=> index ! == i)
      this.setState({
          counters: newArray
      })
      */
  };
}
