import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BftBio.scss';
import BftQuote from "../BftQuote";
import BftPreloader from '../BftPreloader';

class BftBio extends Component {
  render() {
    return (
      <Row className="BftBio">
        {!this.props.pageData ? <Col xl="12"><BftPreloader/></Col> : null}
        <Col xl="12">
          {this.props.pageData ? this.props.pageData.bio.map((p, ndx) => <p key={ndx}>{p}</p>) : null}
        </Col>
        <Col xl="12">
          {this.props.pageData ? <BftQuote quotesList={this.props.pageData.quotes}/> : null}
        </Col>
      </Row>
    );
  }
}

export default BftBio;
