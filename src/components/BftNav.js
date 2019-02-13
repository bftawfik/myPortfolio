import React, { Component } from 'react';
import '../styles/BftNav.sass';

class BftNav extends Component {
  render() {
    return (
      <div className="BftNav">
        <h4 className="navLink">Home</h4>
        <h4 className="navLink">Portofolio</h4>
        <h4 className="navLink">Info & Contact</h4>
      </div>
    );
  }
}

export default BftNav;
