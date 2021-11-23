import React from "react";
import { Modal } from "react-bootstrap";

class BootstrapElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-warning" onClick={this.toggle}>
          {this.props.buttonLabel}
        </button>
        <Modal
          show={this.state.modal}
          onHide={this.toggle}
          className={this.props.className}
        >
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.toggle}>
              Do Something
            </button>{" "}
            <button className="btn btn-secondary" onClick={this.toggle}>
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BootstrapElement;


// Hooks Version of BootstrapElement
// import { useState } from "react";
// import { Modal } from "react-bootstrap";

// function BootstrapElement(props) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button className="btn btn-warning" onClick={() => setIsOpen(!isOpen)}>
//         {props.buttonLabel}
//       </button>
//       <Modal
//         show={isOpen}
//         onHide={() => setIsOpen(!isOpen)}
//         className={props.className}
//       >
//         <Modal.Header toggle={() => setIsOpen(!isOpen)}>
//           Modal title
//         </Modal.Header>
//         <Modal.Body>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Modal.Body>
//         <Modal.Footer>
//           <button
//             className="btn btn-primary"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             Do Something
//           </button>{" "}
//           <button
//             className="btn btn-secondary"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             Cancel
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default BootstrapElement;
