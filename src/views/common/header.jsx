import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Symphony</IndexLink>
      </nav>
    );
  }
}
export default Header;