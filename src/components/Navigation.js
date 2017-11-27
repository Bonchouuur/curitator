import React from 'react';
import Link from './Link';

class Navigation extends React.Component {
  render() {
    return (
      <div role="navigation">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <span> | </span>
        <Link to="/login">Log in</Link>
        <span>or</span>
        <Link to="/register">Sign up</Link>
      </div>
    );
  }
}

export default Navigation;
