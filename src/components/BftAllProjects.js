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
    console.log("vo");
    let projects = !this.props.pageData ? [] : this.props.match.params.filter ? this.props.pageData.projects.filter(p => p.tags.filter(tag => tag.toLowerCase() === this.props.match.params.filter.toLowerCase()).length > 0) : this.props.pageData.projects;
    projects.sort((p1,p2) => p1.order - p2.order);
    let tags = !this.props.pageData ? [] : this.props.pageData.projects.map(pjct => pjct.tags).reduce((total, tags) => total.concat(tags), []).reduce((filtered, tag) => filtered.filter(item => item === tag).length === 0 ? filtered.concat(tag): filtered, []);
    // console.log(projects.sort((p1,p2) => p1.order - p2.order));
    return (
      <Row className="BftAllProjects">
        <Col xs={12} className="filter">
          <h5>Filter:</h5>
        </Col>
        <Col xs={12} className="allTags">
          {tags.map((tag, ndx) => <span key={ndx}><NavLink to={"/portfolio/"+tag.toLowerCase()} activeClassName="selected">{tag}</NavLink></span>)}
        </Col>
        {projects.map((projData, ndx) => <Col lg="6" md="12" key={ndx}><BftProject data={projData}/></Col> )}
        {this.props.match.params.filter ? <Col xl="12" className="backLink">
          <NavLink to="/portfolio">
            <h4><img src="../img/icons/back.png" alt="back button"/>Back to Portofolio</h4>
          </NavLink>
        </Col> : null}
      </Row>
    );
  }
}

export default BftAllProjects;
//
