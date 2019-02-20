import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import BftHeader from './components/BftHeader';
import BftNav from './components/BftNav';
import BftBio from './components/BftBio';
import BftAllProjects from './components/BftAllProjects';
import BftInfoAndContact from './components/BftInfoAndContact';

import  Whoops404 from './components/Whoops404';

import './styles/App.sass';

const BftRoutes = ()=>(
    <BrowserRouter>
      <Container className="App">
        <Route exact path="*" component={BftHeader}/>
        <Route exact path="*" component={BftNav}/>
        <Switch>
          <Route exact path="/" component={BftBio}/>
          <Route exact path="/portofolio" component={BftAllProjects}/>
          <Route exact path="/portofolio/:filter" component={BftAllProjects}/>
          <Route exact path="/infoandcontact" component={BftInfoAndContact}/>
          <Route exact path="*" component={Whoops404}/>
        </Switch>
      </Container>

    </BrowserRouter>
)

export default BftRoutes
// <Route exact path="/" component={App}/>
// <Route exact path="/:filter" component={App}/>
// <Route exact path="/:filter/:filter2" component={App}/>
