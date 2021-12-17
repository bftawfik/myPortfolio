import React, { Component } from 'react';
import '../../styles/BftQuote.sass';

class BftQuote extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    let random, quote="", owner="";
    if(this.props.quotesList){
      random = Math.floor(Math.random() * this.props.quotesList.length)
      quote = this.props.quotesList[random].body;
      owner = this.props.quotesList[random].owner;
    }

    return (
      <div className="BftQuote">
        <h4 className="header">Inspirational Quotes:</h4>
        <h3 className="opening">“</h3>
        <h4>{quote}</h4>
        {owner.length > 0 ? <p>"{owner}"</p> : null}
        <h3 className="closing">”</h3>
      </div>
    );
  }
}

export default BftQuote;
