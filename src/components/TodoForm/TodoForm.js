import React, {Component} from 'react';
import Button from '../Button/Button';
import './todo-form.css'

class TodoForm extends Component {
  state = {
    inputValue: ''
  };

  onChange = e => {
    this.setState({inputValue: e.target.value});
  };

  onAddTodo = () => {
    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''});
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          value={this.state.inputValue}
          onChange={e => this.onChange(e)}
          type="text"
          placeholder="Add a Todo"
        />
        <Button text="Add Task" onClick={this.onAddTodo} />
        <Button text="Clear" onClick={this.props.clearTodos} />
      </form>
    );
  }
}

export default TodoForm;
