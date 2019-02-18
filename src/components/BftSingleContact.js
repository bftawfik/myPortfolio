import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/BftSingleContact.sass';


class BftSingleContact extends Component {

  render() {
    return (
      <Container className="BftSingleContact">
        <img src={this.props.data.icon} alt={this.props.data.label}/>
        <p>{this.props.data.label}</p>
      </Container>
    );
  }
}

export default BftSingleContact;
