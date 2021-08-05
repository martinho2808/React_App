import React from "react";
import Card from "./Card";

export default class CardList extends React.Component {
  render() {
    const sorted = this.props.list.sort((a, b) => b.votes - a.votes);
    return (
      <div>
        {sorted.map((element, i) => {
          return (
            <Card
              index={i}
              key={i}
              name={element.name}
              votes={element.votes}
              deleteItem={this.props.deleteItem}
              downvote={this.props.downvote}
              upvote={this.props.upvote}
            />
          );
        })}
      </div>
    );
  }
}
