import React from 'react';

const Button = props => {
  return <button  className="btn btn-outline-secondary" onClick={props.onClick}>{props.text}</button>;
};

export default Button;
