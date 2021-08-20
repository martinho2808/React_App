import logo from "./logo.svg";
import "./App.css";

// Class version of application with an added React Element

import React from "react";
import Element from "./Components/Element.js";
// import BootstrapElement from "./Components/BootstrapElement.js";
import StatefulComponent from "./Components/StatefulComponent.js";
import HoverableComponent from "./Components/HoverableStateComponent.js";
import ShoppingList from "./Components/ShoppingList.js";
import Loops from "./Components/Loops";
import ClockNoLCM from "./Components/ClockNoLCM.js";
import Counter from "./Components/Counter";
import CurrencyConverter from "./Components/CurrencyConverter";

import AddFormItem from "./Components/Form.js";
import Clock from "./Components/Clock.js";
import APICall from "./Components/APICall";
import WhoIsInSpace from "./Components/WhoIsInSpace.js";

import Top from "./Components/useEffectEx.js";

import BlogPostForm from "./Components/BlogPostForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: false,
      input: "",
    };
  }

  getClock = () => {
    this.setState({
      clock: !this.state.clock,
    });
  };

  updateInput(e) {
    this.setState({
      input: e.target.value,
    });
    console.log(this.state.input);
  }

  render() {
    // To be passed as props - Loops
    // const array = [
    //   { name: "Andy", age: 26, nationality: "Chinese" },
    //   { name: "Bibek", age: 20, nationality: "Nepalese" },
    //   { name: "Lesley", age: 26, nationality: "Hong Kong" },
    //   { name: "Sam", age: 28, nationality: "British" },
    // ];

    const shopping = [
      { item: "Potato" },
      { item: "Bacon" },
      { item: "Mayonnaise" },
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="btn btn-primary" // Added bootstrap with yarn add bootstrap, altered index.js
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <input
          type="text"
          placeholder="no state."
          value={this.state.input}
          onChange={(e) => this.updateInput(e)}
        />

        <Element age="99" name="Sam's World"></Element>
        {/* <BootstrapElement buttonLabel="Click me" /> */}
        <StatefulComponent />
        <HoverableComponent />
        <ShoppingList list={shopping} name="Lesley" />
        <Loops />
        <button onClick={this.getClock}>GetClock</button>
        {this.state.clock ? <Clock /> : "No clock"}
        {/* <Loops array={array} /> */}
        {/* <ClockNoLCM /> */}
        <APICall pokemon="ponyta" />
        <WhoIsInSpace />
        <Counter name="Tom" />
        <Counter name="William" />
        <div className="row">
          <div className="col-6">
            <AddFormItem />
          </div>
          <div className="col-6">
            <CurrencyConverter />
          </div>
        </div>
        <Top />
        <BlogPostForm />
      </div>
    );
  }
}

export default App;
