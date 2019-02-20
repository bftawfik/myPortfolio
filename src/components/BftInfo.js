import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/BftInfo.sass';


class BftInfo extends Component {

  render() {
    return (
      <Row className="BftInfo">
        <Col xl="12">
          <h4>Bishoy Farouk Tawfik</h4>
        </Col>
        <Col xl="12">
          <p>An Experienced Web developer since 2008, Working on building interactive web applications.<p>
          </p>Keen to improve my knowledge and learn new useful techniques, and push the limits of my skills.</p>
        </Col>
      </Row>
    );
  }
}

export default BftInfo;
