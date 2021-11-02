function TodoList(props) {
    const renderTodo = (todo, i) => {
      return (
        <li key={ i }>
          { props.children(todo) }
        </li>
      );
    }
    return (
      <section className='main-section'>
        <ul className='todo-list'>{ props.todos.map(renderTodo)}</ul>
      </section>
    );
  }

  export default TodoList
