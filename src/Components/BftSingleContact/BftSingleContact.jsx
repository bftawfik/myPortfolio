import React, { Component } from 'react';
import '../../styles/BftSingleContact.sass';


class BftSingleContact extends Component {

  render() {
    return (
      <a href={this.props.data.link} alt={this.props.data.label} target="_blank" rel="noopener noreferrer" className="BftSingleContact">
        <img src={this.props.data.icon} alt={this.props.data.label}/>
        <p>{this.props.data.label}</p>
      </a>
    );
  }
}

export default BftSingleContact;
