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
          <p>I'm a newly technology shifted Front-end developer, controlled with my passion towards programming, with a background of  in programming since 2008.</p>
          <p>Nocking every door with a goal of gaining knowledge and experience.</p>
          <p>hope to find my way to be the best developer I can be.</p>
          <p>Seeking new challenges and opportunities to build myself.</p>
          <p>I have two passions, my Family and the programming.</p>
          <p>I'm Always trying to find a solutions through programming to any problem i had.</p>
          <p>I hope to find the right place to reach my full potential.</p>
        </Col>
        <Col xl="12">
          <BftQuote/>
        </Col>
      </Row>
    );
  }
}

export default BftBio;
