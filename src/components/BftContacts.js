import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
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
            link: ""
          },
          {
            label: "+2 (012) 2763-3600",
            icon: "/img/icons/phone.png",
            link: ""
          },
          {
            label: "BFTawfik.com",
            icon: "/img/icons/website.png",
            link: "http://www.bftawfik.com"
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
            link: "linkedin.com/in/bftawfik"
          },
          {
            label: "github.com/bftawfik",
            icon: "/img/icons/github.png",
            link: "github.com/bftawfik"
          },
          {
            label: "freecodecamp.org/bftawfik",
            icon: "/img/icons/freecodecamp.png",
            link: "freecodecamp.org/bftawfik"
          },
          {
            label: "codepen.io/bftawfik",
            icon: "/img/icons/codepen.png",
            link: "codepen.io/bftawfik"
          }
        ]
      ]

    }
  }

  render() {
    return (
      <Container className="BftContacts">

        {this.state.contactsGroups.map((group, ndx) => {
          return(
            <div key={ndx} className="contactsGroups">
              {group.map((contact, contactNdx) => <BftSingleContact data={contact}/>)}
            </div>
          )
        }) }
      </Container>
    );
  }
}

export default BftContacts;
