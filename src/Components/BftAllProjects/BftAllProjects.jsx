import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./BftAllProjects.scss";
import BftProject from "../BftProject/BftProject";
import BftPreloader from "../BftPreloader/BftPreloader";

class BftAllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsState: "k",
    };
  }

  componentWillReceiveProps(nProps) {
    let projects = !nProps.pageData
      ? []
      : nProps.match.params.filter
      ? nProps.pageData.projects.filter(
          (p) =>
            p.tags.filter(
              (tag) =>
                tag.toLowerCase() === nProps.match.params.filter.toLowerCase()
            ).length > 0
        )
      : nProps.pageData.projects;
    projects.sort((p1, p2) => p1.order - p2.order);
    let projectsState = projects.map((p) => ({ isActive: false }));
    this.setState({ projectsState });
  }

  render() {
    let projects = !this.props.pageData
      ? []
      : this.props.match.params.filter
      ? this.props.pageData.projects.filter(
          (p) =>
            p.tags.filter(
              (tag) =>
                tag.toLowerCase() ===
                this.props.match.params.filter.toLowerCase()
            ).length > 0
        )
      : this.props.pageData.projects;
    projects.sort((p1, p2) => p1.order - p2.order);
    let tags = !this.props.pageData
      ? []
      : this.props.pageData.projects
          .map((pjct) => pjct.tags)
          .reduce((total, tags) => total.concat(tags), [])
          .reduce(
            (filtered, tag) =>
              filtered.filter((item) => item === tag).length === 0
                ? filtered.concat(tag)
                : filtered,
            []
          );
    // console.log(projects.sort((p1,p2) => p1.order - p2.order));
    return (
      <Row className="BftAllProjects">
        {projects.length === 0 ? (
          <Col xl="12">
            <BftPreloader />
          </Col>
        ) : null}
        <Col xs={12} className="filter">
          <h5>Filter:</h5>
        </Col>
        <Col xs={12} className="allTags">
          {tags.map((tag, ndx) => (
            <span key={ndx}>
              <NavLink
                to={"/portfolio/" + tag.toLowerCase()}
                activeClassName="selected"
              >
                {tag}
              </NavLink>
            </span>
          ))}
        </Col>
        {projects.map((projData, ndx) => {
          const isActive = this.state.projectsState[ndx]? this.state.projectsState[ndx].isActive : false
          return (
          <Col lg="6" md="12" key={ndx}>
            <BftProject
              data={projData}
              resetProjectsState={this.resetProjectsState.bind(this, ndx)}
              isActive={isActive}
            />
          </Col>
        )})}
        {this.props.match.params.filter ? (
          <Col xl="12" className="backLink">
            <NavLink to="/portfolio">
              <h4>
                <img src="../img/icons/back.png" alt="back button" />
                Back to Portofolio
              </h4>
            </NavLink>
          </Col>
        ) : null}
      </Row>
    );
  }

  resetProjectsState(key) {
    let newProjectsState = this.state.projectsState.map((p, ndx) => ({
      isActive: key == ndx ? true : false,
    }));
    // console.log(newProjectsState);
    this.setState({ projectsState: newProjectsState });
  }
}

export default BftAllProjects;
//
