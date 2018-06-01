import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  state = {
    inputValue: '',
    todos: []
  };

  onChange = e => {
    this.setState({inputValue: e.target.value});
  };

  getRandomId = () => {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  addTodo = e => {
    e.preventDefault();
    const todoToAdd = {
      name: this.state.inputValue,
      id: this.getRandomId()
    };
    const currentTodos = [...this.state.todos, todoToAdd];
    this.setState({todos: currentTodos, inputValue: ''});
    console.log(currentTodos);
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
        <form>
          <input
            value={this.state.inputValue}
            onChange={this.onChange}
            type="text"
            placeholder="Add a mission"
          />
          <button onClick={this.addTodo} type="submit">
            Add Task
          </button>
          <button onClick={this.clearTodos}>Clear Todos</button>
        </form>
        <div>
          <ul>
            {this.state.todos.map((todo) => {
              return (
                <li onClick={() => this.removeTodo(todo)} key={todo.id}>
                  {todo.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
