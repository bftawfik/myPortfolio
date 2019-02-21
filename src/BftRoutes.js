import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AllData from './json/data.json';

import Container from 'react-bootstrap/Container';

import BftHeader from './components/BftHeader';
import BftNav from './components/BftNav';
import BftBio from './components/BftBio';
import BftAllProjects from './components/BftAllProjects';
import BftInfoAndContact from './components/BftInfoAndContact';

import  Whoops404 from './components/Whoops404';

import './styles/App.sass';

class BftRoutes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render(){
    // console.log(AllData.contactsGroups)
    return(
      <BrowserRouter>
        <Container className="App">
          <Route exact path="*" component={BftHeader}/>
          <Route exact path="*" component={BftNav}/>
          <Switch>
            <Route exact path="/" component={BftBio}/>
            <Route exact path="/portofolio" render={(props) => <BftAllProjects {...props} projectsData={AllData.projects}/>}/>
            <Route exact path="/portofolio/:filter" render={(props) => <BftAllProjects {...props} projectsData={AllData.projects}/>}/>
            <Route exact path="/infoandcontact" render={(props) => <BftInfoAndContact {...props} contactsData={AllData.contactsGroups}/>}/>
            <Route exact path="*" component={Whoops404}/>
          </Switch>
        </Container>
      </BrowserRouter>
    )
  }
}

export default BftRoutes
