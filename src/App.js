import logo from "./logo.svg";
import "./App.css";
import Element from "./testElement";
import SayHello from "./testComponent";
import SayGoodbye from "./testClassComponent";
import MaterialUI from "./material_ui_test";
import MaterialUITheme from "./material_ui_theme";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Welcome to React</h3>
        {Element}
        {/* Not conventional  */}
        {/* {SayHello({ name: "sam" })} */}

        {/* This is the way */}
        <SayHello name="sam" />

        <SayGoodbye name="John" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>{" "}
      <MaterialUI />
      <MaterialUITheme />
    </div>
  );
}

export default App;
