import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem/TodoItem";

class App extends Component {
  state = {
    todos: []
  };

  getRandomId = () => {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 16; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  addTodo = value => {
    const todoToAdd = {
      name: value,
      id: this.getRandomId()
    };
    const currentTodos = [...this.state.todos, todoToAdd];
    this.setState({ todos: currentTodos, inputValue: "" });
    console.log(currentTodos);
  };

  removeTodo = todo => {
    const filtered = this.state.todos.filter(el => el !== todo);
    this.setState({ todos: filtered });
  };

  clearTodos = e => {
    e.preventDefault();
    this.setState({ todos: [] });
  };

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoInput
          onChange={this.onChange}
          clearTodos={this.clearTodos}
          addTodo={this.addTodo}
        />
        <div>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                <TodoItem
                  name={todo.name}
                  key={index}
                  onClick={() => this.removeTodo(todo)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
