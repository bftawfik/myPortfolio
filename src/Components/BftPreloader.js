import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Components/BftFooter/BftFooter.scss';

class BftPreloader extends Component {

  constructor(props){
    super(props);
    this.state = {
        loadingMsgs: [
          "Loading",
          "Loading.",
          "Loading..",
          "Loading..."
        ],
        loadingMsgId: 0
    }
    setInterval(function(){ this.setState({"loadingMsgId": this.getNewLoadingMsgId(this.state.loadingMsgId, this.state.loadingMsgs.length)});}.bind(this), 500);
  }

  getNewLoadingMsgId(id, length){
    return (id+1) % length;
  }

  render() {
    return (
      <Row className="BftFooter">
        <Col xl="12" className="logo">
          <p><sub>{this.state.loadingMsgs[this.state.loadingMsgId]}</sub></p>
        </Col>
      </Row>
    );
  }

}

export default BftPreloader;
