import React, { Component } from "react";
import CardList from "./CardList";

class CardApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "Promise Based syntax", votes: 1 },
        { name: "Difference between Let Const and Var", votes: 2 },
      ],
      name: "",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(event) {
    let name = event.target.value;
    console.log(name);
    this.setState({
      name: name,
    });
  }
  addItem(event) {
    event.preventDefault();
    let newItem = this.state.name;
    console.log(newItem);
    let newObj = { name: newItem, votes: 0 };
    let newArr = this.state.list;
    let newList = newArr.concat(newObj);
    this.setState({
      list: newList,
    });
  }
  deleteItem(index) {
    let arr = this.state.list;
    delete arr[index];
    this.setState({
      list: arr,
    });
  }
  downvote(index) {
    let arr = this.state.list;
    let object = arr[index];
    object.votes -= 1;
    arr[index] = object;
    this.setState({
      list: arr,
    });
  }
  upvote(index) {
    let arr = this.state.list;
    let object = arr[index];
    object.votes += 1;
    arr[index] = object;
    this.setState({
      list: arr,
    });
  }
  render() {
    return (
      <div>
        <h1>JavaScript Concept Revision</h1>
        <CardList
          list={this.state.list}
          deleteItem={this.deleteItem}
          downvote={this.downvote}
          upvote={this.upvote}
        />
        <br />
        <center>
          <div className="col-5">
            <h4>Add New Item</h4>
            <form onSubmit={this.addItem}>
              {" "}
              <input
                type="text"
                placeholder="New Name"
                value={this.state.name}
                onChange={this.inputChange}
              />
              <br />
              <button
                type="submit"
                className="btn btn-outline-dark waves-effect"
              >
                Add Item
              </button>
            </form>
          </div>
        </center>
      </div>
    );
  }
}

export default CardApp;
