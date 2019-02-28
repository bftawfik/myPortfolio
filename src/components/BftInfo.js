import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/BftInfo.sass';


class BftInfo extends Component {

  render() {
    return (
      <Row className="BftInfo">
        <Col xl="12">
          <h4>{this.props.infoData ? this.props.infoData.name : ""}</h4>
        </Col>
        <Col xl="12">
          {this.props.infoData ? this.props.infoData.data.map((p, ndx) => <p key={ndx}>{p}</p>) : ""}
        </Col>
        <Col xl="12">
          <a href={this.props.infoData ? this.props.infoData.resume : ""}><h4>Resume (C.V.)</h4></a>
        </Col>
      </Row>
    );
  }
}

export default BftInfo;
