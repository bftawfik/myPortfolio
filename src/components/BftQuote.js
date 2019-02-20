import React, { Component } from 'react';
import '../styles/BftQuote.sass';

class BftQuote extends Component {

  constructor(props){
    super(props);
    this.state = {
      quotes: [
        {
          body: "Failure Is Success If We Learn From It.",
          owner: "Malcolm Forbes"
        },
        {
          body: "Never Stop Learning, Because Life Never Stops Teaching.",
          owner: ""
        },
        {
          body: "You'll Never Learn If You Don't Make Mistakes.",
          owner: ""
        },
        {
          body: "I've Learned That I Still Have A Lot To Learn.",
          owner: "Maya Angelou"
        },
        {
          body: "Sometimes You Win, Sometimes You Learn.",
          owner: "John C. Maxwell"
        },
        {
          body: "Don't Waste A Good Mistake. Learn From It.",
          owner: "Robert Kiyosaki"
        },
        {
          body: "Live As If You Were To Die Tomorrow. Learn As If You Were To Live Forever.",
          owner: "Mahatma Gandhi"
        }
      ]
    }
  }

  render() {
    let random = Math.floor(Math.random() * this.state.quotes.length)
    let quote = this.state.quotes[random].body;
    let owner = this.state.quotes[random].owner;
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
