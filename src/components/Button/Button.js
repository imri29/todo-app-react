import React from 'react';
import './button.css';

const Button = props => {
  return (
    <button className="btn btn-outline-info" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
