import React, { Component } from 'react';
import '../styles/App.sass';
import BftHeader from './BftHeader';
import BftNav from './BftNav';
// import BftBio from './BftBio';
// import BftAllProjects from './BftAllProjects';
import BftInfoAndContact from './BftInfoAndContact';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import ThemeProvider from 'react-bootstrap/ThemeProvider';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <BftHeader/>
        <BftNav/>
        {/*<BftBio/>*/}
        <BftInfoAndContact/>
      </Container>
    );
  }
}

export default App;
