import React, { Component } from 'react';
import Todos from './Todos'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'do important thing'},
      {id: 2, content: 'do super important thing'},
      {id: 3, content: 'do fun thing'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id); //debugging
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo} />
      
      </div>
    );
  }
}
export default App;
