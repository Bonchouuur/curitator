import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import normalizeCss from 'normalize.css';
import Header from './Header';
import Feedback from './Feedback';
import Footer from './Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss)(Layout);
