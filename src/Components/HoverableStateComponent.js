//Class Version of hoverable stateful component
import React from "react";
import hongKongImage from "../assets/hongkong.jpg";

export default class HoverableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: 0,
    };
  }

  // BAD IMPLEMENTATION:

  // handleHover = () => {
  //   this.state.hovered = this.state.hovered + 1;
  //   console.log(this.state.hovered);
  // };

  handleHover = () => {
    this.setState({
      hovered: this.state.hovered + 1,
    });
  };

  render() {
    return (
      <>
        <div>
          <h3>Hoverable Image</h3>
          <img
            onMouseEnter={this.handleHover}
            src={hongKongImage}
            alt="interesting colonial hong kong"
          />
          <p>We have hovered this many times:</p>
          <p>{this.state.hovered}</p>
        </div>
      </>
    );
  }
}

// Hooks Version of hoverable stateful component
// import { useState } from "react";
// import hongKongImage from "../assets/hongkong.jpg";

// const HoverableComponent = () => {
//   const [hovered, setHovered] = useState(0);
//   return (
//     <>
//       <div>
//         <h3>Hoverable Image</h3>
//         <img
//           src={hongKongImage}
//           alt="interesting hong kong"
//           onMouseEnter={() => setHovered(hovered + 1)}
//         />
//         <p>We have hovered this many times:</p>
//         <p>{hovered}</p>
//       </div>
//     </>
//   );
// };

// export default HoverableComponent;
