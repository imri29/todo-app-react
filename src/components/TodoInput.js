import React, { Component } from "react";
import Button from "./Button/Button";

class TodoInput extends Component {
  state = {
    inputValue: ""
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  onAddTodo = () => {
   this.props.addTodo(this.state.inputValue);
   this.setState({inputValue: ''});
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={e => this.onChange(e)}
          type="text"
          placeholder="Add a mission"
        />
        <Button
          text="Add Task"
          onClick={this.onAddTodo}
        />
        <Button text="Clear" onClick={this.props.clearTodos} />
      </div>
    );
  }
}

export default TodoInput;
