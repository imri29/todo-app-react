import React, {Component} from 'react';
import './todo-item.css';
import Button from '../Button/Button';

class TodoItem extends Component {
  state = {
    done: false
  };

  onButtonClick = () => {
    this.setState({done: !this.state.done});
  };

  render() {
    return (
      <div className="mx-auto li-container">
        <li
          style={{color: this.state.done ? '#d3d3d3' : '#008000'}}
          className="todo-item list-group-item"
        >
          <span onClick={this.props.onClick} className="times">
            &times;
          </span>
          <span className="todo-text">{this.props.name}</span>
          <Button
            text={this.state.done ? 'Todo' : 'Done'}
            onClick={this.onButtonClick}
          />
        </li>
      </div>
    );
  }
}

export default TodoItem;
