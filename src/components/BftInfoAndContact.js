import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/BftInfoAndContact.sass';
import BftInfo from './BftInfo'
import BftContacts from './BftContacts'

class BftInfoAndContact extends Component {

  render() {

    // console.log(this.props.contactsData)
    return (
      <Row className="BftInfoAndContact">
        <Col xl="12">
          <BftInfo/>
        </Col>
        <Col xl="12">
          <BftContacts contactsData={this.props.contactsData}/>
        </Col>
      </Row>
    );
  }
}

export default BftInfoAndContact;
