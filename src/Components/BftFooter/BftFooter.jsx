import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BftFooter.scss';

class BftFooter extends Component {
  render() {
    return (
      <Row className="BftFooter">
        <Col xl="12" className="logo">
          <p><sub>© 2019 bftawfik.github.io All Rights Reserved</sub></p>
        </Col>
      </Row>
    );
  }
}

export default BftFooter;
