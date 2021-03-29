// Contains State and Props

import React from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default class BootstrapElement extends React.Component {
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
        <button className="btn btn-danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={this.toggle}>
              Do Something
            </button>{" "}
            <button className="btn btn-secondary" onClick={this.toggle}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// Hooks Version of BootstrapElement
// import { useState } from "react";
// import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

// const BootstrapElement = (props) => {
//   const [modal, setModal] = useState(false);

//   return (
//     <div>
//       <button className="btn btn-danger" onClick={() => setModal(!modal)}>
//         {props.buttonLabel}
//       </button>
//       <Modal
//         isOpen={modal}
//         toggle={() => setModal(!modal)}
//         className={props.className}
//       >
//         <ModalHeader toggle={() => setModal(!modal)}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <button className="btn btn-primary" onClick={() => setModal(!modal)}>
//             Do Something
//           </button>{" "}
//           <button
//             className="btn btn-secondary"
//             onClick={() => setModal(!modal)}
//           >
//             Cancel
//           </button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default BootstrapElement;
