import React from 'react';
import Link from './Link';
import Navigation from './Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navigation />
          <Link to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span>Your Company</span>
          </Link>
          <div>
            <h1>React</h1>
            <p>Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
