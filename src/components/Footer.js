import React from 'react';
import Link from './Link';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>© Your Company</span>
          <span>·</span>
          <Link to="/">Home</Link>
          <span>·</span>
          <Link to="/admin">Admin</Link>
          <span>·</span>
          <Link to="/privacy">Privacy</Link>
          <span>·</span>
          <Link to="/not-found">Not Found</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
