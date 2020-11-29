import React from 'react';
import Header from './Header';
import Body from './Body';
// import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default Layout;