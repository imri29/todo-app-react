import React, {Component} from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

export default class App extends Component {
  state = {
    todos: []
  };

  getRandomId = () => {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  addTodo = value => {
    console.log(value);
    const todoToAdd = {
      name: value,
      id: this.getRandomId()
    };
    const currentTodos = [...this.state.todos, todoToAdd];
    this.setState({todos: currentTodos, inputValue: ''});
  };

  removeTodo = todo => {
    const filtered = this.state.todos.filter(el => el !== todo);
    this.setState({todos: filtered});
  };

  clearTodos = e => {
    e.preventDefault();
    this.setState({todos: []});
  };

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoForm clearTodos={this.clearTodos} addTodo={this.addTodo} />
        <div>
          <ul className="list-group col-sm-12">
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  name={todo.name}
                  key={todo.id}
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


//Todo: fix removing a nameless todo.