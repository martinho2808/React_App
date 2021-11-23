// import React from "react";

// export default class InputForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       item: "",
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addItem(this.state);
//     this.setState({
//       item: "",
//     });
//   };

//   handleChange = (e) => {
//     this.setState({
//       item: e.currentTarget.value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label>{this.props.label}</label>
//           <br />
//           <input
//             type="text"
//             value={this.state.item}
//             onChange={this.handleChange}
//           />
//           <button className="btn btn-primary" type="submit" value="submit">
//             Submit
//           </button>
//         </form>
//       </>
//     );
//   }
// }
/**
Buttons could be done like this:

import {Button} from 'react-bootstrap'

<Button variant="danger"  type="submit" value="submit">Submit me. </Button>


 */

// React functional component

import { useState } from "react";

export default function InputForm(props) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newItem = { item: item };
    props.addItemProp(newItem);
    setItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>{props.label}</label>
        <br />
        <input
          name="item"
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
        />
        {/* The button code below still applies bootstrap style */}
        <button className="btn btn-danger" type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}

/**
Buttons could be done like this:

import {Button} from 'react-bootstrap'

<Button variant="danger"  type="submit" value="submit">Submit me. </Button>


 */
