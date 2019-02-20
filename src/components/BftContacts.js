import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/BftContacts.sass';
import BftSingleContact from './BftSingleContact';

class BftContacts extends Component {

  constructor(props){
    super(props);
    this.state = {
      contactsGroups: [
        [
          {
            label: "BFTawfik@gmail.com",
            icon: "/img/icons/email.png",
            link: "mailto:bftawfik@gmail.com"
          },
          {
            label: "+2 (012) 2763-3600",
            icon: "/img/icons/phone.png",
            link: "tel:+201227633600"
          },
          {
            label: "BFTawfik.github.io",
            icon: "/img/icons/website.png",
            link: "https://bftawfik.github.io/"
          },
          {
            label: "Cairo - Egypt.",
            icon: "/img/icons/location.png",
            link: "https://www.google.com/maps/@30.0594838,31.2234448,13z"
          }
        ],
        [
          {
            label: "linkedin.com/in/bftawfik",
            icon: "/img/icons/linkedin.png",
            link: "https://www.linkedin.com/in/bftawfik"
          },
          {
            label: "github.com/bftawfik",
            icon: "/img/icons/github.png",
            link: "https://www.github.com/bftawfik"
          },
          {
            label: "freecodecamp.org/bftawfik",
            icon: "/img/icons/freecodecamp.png",
            link: "https://www.freecodecamp.org/bftawfik"
          },
          {
            label: "codepen.io/bftawfik",
            icon: "/img/icons/codepen.png",
            link: "https://www.codepen.io/bftawfik"
          }
        ]
      ]

    }
  }

  render() {
    return (
      <Row className="BftContacts">

        {this.state.contactsGroups.map((group, ndx) => {
          return(
            <Col xl="12" key={ndx} className="contactsGroups"><Row>
              {group.map((contact, contactNdx) => <Col md="6"><BftSingleContact data={contact}/></Col>)}
            </Row></Col>
          )
        }) }
      </Row>
    );
  }
}

export default BftContacts;
