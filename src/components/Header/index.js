import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header flex center">
        <img src={logo} alt="logo" />
      </header>
    );
  }
}

export default Header;