import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BftNav.scss';

class BftNav extends Component {

  render() {
    return (
      <Row className="BftNav">
        <Col md="4" sm="12">
          <NavLink exact to="/" activeClassName="selected">
            <h4 className="navLink">Home</h4>
          </NavLink>
        </Col>
        <Col md="4" sm="12">
          <NavLink to="/portfolio" activeClassName="selected">
            <h4 className="navLink">Portfolio</h4>
          </NavLink>
        </Col>
        <Col md="4" sm="12">
          <NavLink to="/infoandcontact" activeClassName="selected">
            <h4 className="navLink">Info & Contact</h4>
          </NavLink>
        </Col>
      </Row>
    );
  }
}

export default BftNav;
