import logo from "./logo.svg";
import "./App.css";

// Base Functional Application, functional components are great for displaying data
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Base Class Based Application, class based components can display data as well as contain function logic to achieve interaction or even API calls, also with class you have access to Reacts life cycle methods
// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// Using In-Line Styling in React (functional)

// function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         border: "2px solid #cccccc",
//         borderRadius: "20px",
//         backgroundColor: "#cccccc",
//         margin: "50px",
//       }}
//     >
//       <div>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
//           ullamcorper nec diam in viverra. Phasellus non risus lacus. Aenean
//           pretium magna tortor, id venenatis felis euismod at. In sed urna
//           laoreet mauris porta semper. Integer a metus vitae augue pellentesque
//           suscipit quis eu lorem. Nam sed metus et arcu efficitur imperdiet at
//           nec ligula.
//           <span style={{ fontWeight: 600, color: "#FF0000" }}>
//             In mi ligula, egestas nec nisl eget, tincidunt rutrum augue. Vivamus
//             sed odio mattis, posuere metus at, placerat quam. Fusce lorem ante,
//             suscipit ut tempus sit amet, fringilla sed nulla. Etiam eget nunc
//             nec arcu mollis vestibulum.
//           </span>
//           Duis feugiat lacus vitae dolor tincidunt, placerat sollicitudin enim
//           elementum. Maecenas ac nulla ut ligula viverra auctor. Duis iaculis
//           mauris eu ex pharetra, ut congue nisl maximus. Nulla lectus sem,
//           semper eu massa vitae, vulputate mattis diam. In a blandit mi, quis
//           elementum urna.
//         </p>
//       </div>
//       <div>
//         <p>
//           Sed tincidunt orci sed nulla ornare sollicitudin. Praesent vitae
//           efficitur leo. Pellentesque efficitur gravida tristique. Aliquam in
//           ante nec turpis finibus vehicula.
//           <span style={{ fontWeight: 600, color: "#FF0000" }}>
//             {" "}
//             Class aptent taciti sociosqu ad litora torquent per conubia nostra,
//             per inceptos himenaeos.
//           </span>
//           In eget imperdiet odio. Pellentesque vulputate lobortis neque, at
//           rhoncus tortor eleifend sit amet. Morbi vehicula metus eu consequat
//           ullamcorper. Nunc facilisis quis purus ac rutrum. Nam cursus quam eu
//           purus condimentum egestas. Phasellus ultrices neque odio, nec
//           imperdiet quam semper quis.
//         </p>
//         <h4>Reciepe for success</h4>
//         <ol style={{ textDecoration: "overline underline", fontSize: "16px" }}>
//           <li>Know where to write your JSX</li>
//           <li>
//             Know understand how React applications / SPA are created and used
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// Styling using stlye blocks/ variables (functional)

// function App() {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     border: "2px solid #cccccc",
//     borderRadius: "20px",
//     backgroundColor: "#cccccc",
//     margin: "50px",
//   };

//   const importantSpannedText = {
//     fontWeight: 600,
//     color: "#FF0000",
//   };

//   const listDecoration = {
//     textDecoration: "overline underline",
//     fontSize: "16px",
//   };

//   return (
//     <div style={containerStyle}>
//       <div>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
//           ullamcorper nec diam in viverra. Phasellus non risus lacus. Aenean
//           pretium magna tortor, id venenatis felis euismod at. Mauris at risus
//           sed ante consectetur fermentum in ut dolor. Nam sed metus et arcu
//           efficitur imperdiet at nec ligula.
//           <span style={importantSpannedText}>
//             In mi ligula, egestas nec nisl eget, tincidunt rutrum augue. Vivamus
//             sed odio mattis, posuere metus at, placerat quam. Fusce lorem ante,
//             suscipit ut tempus sit amet, fringilla sed nulla. Etiam eget nunc
//             nec arcu mollis vestibulum.
//           </span>
//           Duis feugiat lacus vitae dolor tincidunt, placerat sollicitudin enim
//           elementum. Maecenas ac nulla ut ligula viverra auctor. Duis iaculis
//           mauris eu ex pharetra, ut congue nisl maximus. In a blandit mi, quis
//           elementum urna.
//         </p>
//       </div>
//       <div>
//         <p>
//           Sed tincidunt orci sed nulla ornare sollicitudin. Praesent vitae
//           efficitur leo. Duis hendrerit consectetur suscipit. Aliquam in ante
//           nec turpis finibus vehicula.
//           <span style={importantSpannedText}>
//             {" "}
//             Class aptent taciti sociosqu ad litora torquent per conubia nostra,
//             per inceptos himenaeos.
//           </span>
//           In eget imperdiet odio. Pellentesque vulputate lobortis neque, at
//           rhoncus tortor eleifend sit amet. Morbi vehicula metus eu consequat
//           ullamcorper. Nunc facilisis quis purus ac rutrum. Nam cursus quam eu
//           purus condimentum egestas. Phasellus ultrices neque odio, nec
//           imperdiet quam semper quis.
//         </p>
//         <h4>Reciepe for success</h4>
//         <ol style={listDecoration}>
//           <li>Know where to write your JSX</li>
//           <li>
//             Know understand how React applications / SPA are created and used
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// Styling your react application using a CSS style sheet

// import "./App.css";

// function App() {
//   return (
//     <div className="App-Container">
//       <div>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
//           ullamcorper nec diam in viverra. Phasellus non risus lacus. Aenean
//           pretium magna tortor, id venenatis felis euismod at. Mauris at risus
//           sed ante consectetur fermentum in ut dolor. Nam sed metus et arcu
//           efficitur imperdiet at nec ligula.
//           <span className="spannedText">
//             In mi ligula, egestas nec nisl eget, tincidunt rutrum augue. Vivamus
//             sed odio mattis, posuere metus at, placerat quam. Fusce lorem ante,
//             suscipit ut tempus sit amet, fringilla sed nulla. Etiam eget nunc
//             nec arcu mollis vestibulum.
//           </span>
//           Duis feugiat lacus vitae dolor tincidunt, placerat sollicitudin enim
//           elementum. Maecenas ac nulla ut ligula viverra auctor. Duis iaculis
//           mauris eu ex pharetra, ut congue nisl maximus. In a blandit mi, quis
//           elementum urna.
//         </p>
//       </div>
//       <div>
//         <p>
//           Sed tincidunt orci sed nulla ornare sollicitudin. Praesent vitae
//           efficitur leo. Pellentesque efficitur gravida tristique. Vivamus
//           ultrices faucibus dolor, a fermentum nisl mollis at. Sed maximus nibh
//           ac euismod suscipit. Duis hendrerit consectetur suscipit. Aliquam in
//           ante nec turpis finibus vehicula.
//           <span className="spannedText">
//             {" "}
//             Class aptent taciti sociosqu ad litora torquent per conubia nostra,
//             per inceptos himenaeos.
//           </span>
//           In eget imperdiet odio. Pellentesque vulputate lobortis neque, at
//           rhoncus tortor eleifend sit amet. Nunc facilisis quis purus ac rutrum.
//           Nam cursus quam eu purus condimentum egestas. Phasellus ultrices neque
//           odio, nec imperdiet quam semper quis.
//         </p>
//         <h4>Reciepe for success</h4>
//         <ol className="listDecorators">
//           <li>Know where to write your JSX</li>
//           <li>
//             Know understand how React applications / SPA are created and used
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// Class version of application with an added React Element

// import React from "react";
// import Element from "./Element.js";
// import BootstrapElement from "./BootstrapElement.js";
// import StatefulComponent from "./StatefulComponent.js";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="btn btn-primary" // Added bootstrap with yarn add bootstrap, altered index.js
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <Element age="99" name="Sam's World"></Element>
//         <BootstrapElement buttonLabel="Click me" />
//         <StatefulComponent />
//       </div>
//     );
//   }
// }

export default App;
