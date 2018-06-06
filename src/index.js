import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoForm from './components/TodoForm/TodoForm';
import TodoItem from './components/TodoItem/TodoItem';

class App extends Component {
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
        <TodoForm
          onChange={this.onChange}
          clearTodos={this.clearTodos}
          addTodo={this.addTodo}
        />
        <div>
          <ul>
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
