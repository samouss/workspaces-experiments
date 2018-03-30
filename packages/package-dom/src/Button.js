import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <div>
    <button onClick={onClick}>Click me!</button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
