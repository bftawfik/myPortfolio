import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/BftHeader.sass';

class BftHeader extends Component {
  render() {
    return (
      <Row className="BftHeader">
        <Col xl="12" className="logo">
        </Col>
      </Row>
    );
  }
}

export default BftHeader;
