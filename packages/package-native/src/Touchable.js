import React from 'react';
import PropTypes from 'prop-types';

const Touchable = ({ onClick }) => (
  <div>
    <button onClick={onClick}>Click me!</button>
  </div>
);

Touchable.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Touchable;
