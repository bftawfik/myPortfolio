import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/BftNav.sass';

class BftNav extends Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
      <div className="BftNav">
        <NavLink exact to="/" activeClassName="selected">
          <h4 className="navLink">Home</h4>
        </NavLink>
        <NavLink to="/portofolio" activeClassName="selected">
          <h4 className="navLink">Portofolio</h4>
        </NavLink>
        <NavLink to="/infoandcontact" activeClassName="selected">
          <h4 className="navLink">Info & Contact</h4>
        </NavLink>
      </div>
    );
  }
}

export default BftNav;
