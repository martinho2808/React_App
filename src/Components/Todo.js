// Functional based component
function TodoList(props) {
  const renderTodo = (todo, i) => {
    return <li key={i}>{props.children(todo)}</li>;
  };
  return (
    <section className="main-section">
      <ul className="todo-list">{props.todos.map(renderTodo)}</ul>
    </section>
  );
}

export default TodoList;

// Class based component

// import React from "react";

// class TodoList extends React.Component {
//   renderTodo = (todo, i) => {
//     return <li key={i}> {this.props.children(todo)}</li>;
//   };

//   render() {
//     return (
//       <section className="main-section">
//         <ul className="todo-list">{this.props.todos.map(this.renderTodo)}</ul>
//       </section>
//     );
//   }
// }

// export default TodoList;
