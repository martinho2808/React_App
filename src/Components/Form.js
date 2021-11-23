import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

// class based form
export default class AddFormItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "",
      firstName: "",
      email: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({
      firstName: e.currentTarget.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.currentTarget.value,
    });
  };

  handleOptionChange = (val) => {
    this.setState({
      selectedOption: val,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `You are a ${this.state.selectedOption} your name is ${this.state.firstName} and your email is ${this.state.email}`
    );
    this.setState({
      firstName: "",
      email: "",
      selectedOption: "",
    });
  };

  render() {
    return (
      <>
        <h3>Male or Female</h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <ButtonGroup>
              <label>
                <Button
                  variant="info"
                  onClick={() => this.handleOptionChange("Male")}
                  active={this.state.selectedOption === "Male"}
                  onChange={this.handleOptionChange}
                >
                  Male
                </Button>
              </label>
              <label>
                <Button
                  variant="secondary"
                  onClick={() => this.handleOptionChange("Female")}
                  active={this.state.selectedOption === "Female"}
                  onChange={this.handleOptionChange}
                >
                  Female
                </Button>
              </label>
            </ButtonGroup>
          </div>
          <label>First Name:</label>
          <br />
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleNameChange}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br />
          <Button type="submit" value="submit" variant="primary">
            Submit{" "}
          </Button>
        </form>
      </>
    );
  }
}

// Functional hook based component

// import { useState } from "react";
// import { Button, ButtonGroup } from "react-bootstrap";

// export default function AddFormItem() {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(
//       `You are a ${selectedOption}, your name is ${firstName} and your email is: ${email}`
//     );

//     setSelectedOption("");
//     setFirstName("");
//     setEmail("");
//   }

//   return (
//     <>
//       <h3>Male or Female?</h3>
//       <br />
//       <form onSubmit={handleSubmit}>
//         <div>
//           <ButtonGroup>
//             <label>
//               <Button
//                 variant="info"
//                 onClick={() => setSelectedOption("Male")}
//                 active={selectedOption === "Male"}
//               >
//                 Male
//               </Button>
//             </label>
//             <label>
//               <Button
//                 variant="secondary"
//                 onClick={() => setSelectedOption("Female")}
//                 active={selectedOption === "Female"}
//               >
//                 Female
//               </Button>
//             </label>
//           </ButtonGroup>
//         </div>

//         <label>First Name:</label>
//         <br />
//         <input
//           name="firstName"
//           value={firstName}
//           onChange={(e) => setFirstName(e.currentTarget.value)}
//         />
//         <br />
//         <label>Email:</label>
//         <br />
//         <input
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.currentTarget.value)}
//         />

//         <Button type="submit" variant='danger' value="submit">
//           Submit
//         </Button>
//       </form>
//     </>
//   );
// }
