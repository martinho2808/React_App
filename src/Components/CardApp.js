import { useState, useEffect } from "react";
import CardList from "./CardList";
const CardApp = () => {
  let [list, setList] = useState([
    { name: "Promise Based Syntax", votes: 1 },
    { name: "Difference Between Let Const and  Var", votes: 2 },
  ]);
  let [name, setName] = useState("");

  function deleteItem(index) {
    console.log("delete item");
    let array = [...list];
    array.splice(1, 1);
    setList(array);
  }

  function downvote(index) {
    console.log("downvote");
    let array = [...list];
    let object = array[index];
    object.votes -= 1;
    array[index] = object;
    setList(array);
  }

  const upvote = (index) => {
    console.log("upvote");
    let array = [...list];
    let object = array[index];
    object.votes += 1;
    array[index] = object;
    setList(array);
  };

  const addItem = (event) => {
    console.log("add item");
    event.preventDefault();
    let newItem = { name: name, votes: 0 };
    let array = list;
    let newArray = array.concat(newItem);
    setList(newArray);
  };

  return (
    <div>
      <h1>JavaScript Concept Revision</h1>
      <CardList
        list={list}
        deleteItem={deleteItem}
        downvote={downvote}
        upvote={upvote}
      />
      <br />
      <center>
        <div className="col-5">
          <h4>Add New Item</h4>
          <form onSubmit={addItem}>
            {" "}
            <input
              type="text"
              placeholder="New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-outline-dark waves-effect">
              Add Item
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};
export default CardApp;

// See if you can turn this into a class based component
