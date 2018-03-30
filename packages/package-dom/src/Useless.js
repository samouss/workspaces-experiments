import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Useless extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    avaiable: true,
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <p>Hello I'm useless...</p>
        {children}
      </div>
    );
  }
}

export default Useless;
