import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/BftBio.sass';
import BftQuote from "./BftQuote";

class BftBio extends Component {
  render() {
    return (
      <Row className="BftBio">
        <Col xl="12">
          {this.props.pageData ? this.props.pageData.bio.map((p, ndx) => <p key={ndx}>{p}</p>) : null}
        </Col>
        <Col xl="12">
          <BftQuote quotesList={this.props.pageData ? this.props.pageData.quotes : null}/>
        </Col>
      </Row>
    );
  }
}

export default BftBio;
