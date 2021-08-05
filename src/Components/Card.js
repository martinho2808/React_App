import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">{this.props.name}</div>
        <div className="card-text">{this.props.votes}</div>
        <div className="d-flex justify-content-center">
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
        </div>
      </div>
    );
  }
}

export default Card;
