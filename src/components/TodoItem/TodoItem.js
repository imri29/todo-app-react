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
    return <div>
        <li className="todo-item" onClick={this.props.onClick}>
          <span style={{color: this.state.done ? 'grey' : 'rebeccapurple'}}>
            {this.props.name}
          </span>
        </li>
        <Button text={this.state.done ? 'Todo' : 'Done'} onClick={this.onButtonClick} />
      </div>;
  }
}

export default TodoItem;

//todo: change the text of the done button with a ternary operator (similar to style)
