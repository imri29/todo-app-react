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
      <div className="mx-auto">
        <li className="todo-item list-group-item" onClick={this.props.onClick}>
          <span style={{color: this.state.done ? 'grey' : 'rebeccapurple'}}>
            {this.props.name}
          </span>
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
