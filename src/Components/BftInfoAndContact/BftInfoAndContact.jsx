import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BftInfoAndContact.scss';
import BftInfo from '../BftInfo/BftInfo';
import BftContacts from '../BftContacts/BftContacts';
import BftPreloader from '../BftPreloader'

class BftInfoAndContact extends Component {

  render() {
    return (
      <Row className="BftInfoAndContact">
        {!this.props.pageData ? <Col xl="12"><BftPreloader/></Col> : null}
        <Col xl="12">
          <BftInfo infoData={this.props.pageData ? this.props.pageData.info : null}/>
        </Col>
        <Col xl="12">
          <BftContacts contactsData={this.props.pageData ? this.props.pageData.contactsGroups : null}/>
        </Col>
      </Row>
    );
  }
}

export default BftInfoAndContact;
