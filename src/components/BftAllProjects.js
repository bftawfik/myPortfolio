import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/BftAllProjects.sass';
import BftProject from './BftProject';

class BftAllProjects extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    // console.log(this.props)
    let projects = this.props.match.params.filter ? this.props.projectsData.filter(p => p.tags.filter(tag => tag.toLowerCase() === this.props.match.params.filter.toLowerCase()).length > 0) : this.props.projectsData;
    return (
      <Row className="BftAllProjects">
        {projects.map((projData, ndx) => <Col lg="6" md="12" key={ndx}><BftProject data={projData}/></Col> )}
        {this.props.match.params.filter ? <Col xl="12" className="backLink">
          <NavLink to="/portofolio">
            <h4><img src="../img/icons/back.png" alt="back button"/>Back to Portofolio</h4>
          </NavLink>
        </Col> : null}
      </Row>
    );
  }
}

export default BftAllProjects;
//
