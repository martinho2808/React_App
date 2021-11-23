// import React, { Component } from "react";
// class Card extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-title">{this.props.name}</div>
//         <div className="card-text">{this.props.votes}</div>
//         <div className="d-flex justify-content-center">
//           <button
//             onClick={() => this.props.deleteItem(this.props.index)}
//             type="button"
//             className="btn btn-outline-dark waves-effect"
//           >
//             Delete
//           </button>
//           <button
//             onClick={() => this.props.downvote(this.props.index)}
//             type="button"
//             className="btn btn-outline-dark waves-effect"
//           >
//             Downvote
//           </button>
//           <button
//             onClick={() => this.props.upvote(this.props.index)}
//             type="button"
//             className="btn btn-outline-dark waves-effect"
//           >
//             Upvote
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;
// When developing bootstrap components that are just visual, you can still apply className to the div to apply the style.
// If the bootstrap Element uses JavaScript it might be easier to import the element like the file BootstrapElement/ the code below.
// You can follow the react-bootstrap documentation here: https://react-bootstrap.github.io/


import React, { Component } from "react";
import {Card} from 'react-bootstrap'
class RevisionCard extends Component {
  render() {
    return (
      <Card>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Title>{this.props.votes}</Card.Title>
        <Card.Body className="d-flex justify-content-center">
          <button
            onClick={() => this.props.deleteItem(this.props.index)}
            type="button"
            className="btn btn-outline-dark waves-effect"
          >
            Delete
          </button>
          <button
            onClick={() => this.props.downvote(this.props.index)}
            type="button"
            className="btn btn-outline-dark waves-effect"
          >
            Downvote
          </button>
          <button
            onClick={() => this.props.upvote(this.props.index)}
            type="button"
            className="btn btn-outline-dark waves-effect"
          >
            Upvote
          </button>
        </Card.Body>
      </Card>
    );
  }
}

export default RevisionCard;

// See if you can turn this into a functional component. 