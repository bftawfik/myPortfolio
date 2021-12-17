import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BftHeader.scss';

class BftHeader extends Component {
  render() {
    return (
      <Row className="BftHeader">
        <Col xl="12" className="logo">
          <NavLink to="/" activeClassName="selected"></NavLink>
        </Col>
      </Row>
    );
  }
}

export default BftHeader;
