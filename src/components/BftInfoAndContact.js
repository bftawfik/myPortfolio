import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/BftInfoAndContact.sass';
import BftInfo from './BftInfo'
import BftContacts from './BftContacts'

class BftInfoAndContact extends Component {

  render() {
    return (
      <Container className="BftInfoAndContact">
        <BftInfo/>
        <BftContacts/>
      </Container>
    );
  }
}

export default BftInfoAndContact;
