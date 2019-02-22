import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/BftContacts.sass';
import BftSingleContact from './BftSingleContact';

class BftContacts extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    // console.log(this.props.contactsData)
    return (
      <Row className="BftContacts">
        {this.props.contactsData ? this.props.contactsData.map((group, ndx) => {
          return(
            <Col xl="12" key={ndx} className="contactsGroups"><Row>
              {group.map((contact, contactNdx) => <Col md="6"key={contactNdx}><BftSingleContact data={contact}/></Col>)}
            </Row></Col>
          )
        }) : ""}
      </Row>
    );
  }
}

export default BftContacts;
