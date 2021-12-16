import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/BftProject.sass';

class BftProject extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="BftProject" onClick={this.props.resetProjectsState}>
        <div className={this.props.isActive ? "projectOverlay" : "projectOverlay hided"}>
          <div className="projectOverlayData">
            <h4>{this.props.data.title}</h4>
            <div className="links">
              <div className="externalLinks">
                {this.props.data.externalLinks.liveVersion ? <a href={this.props.data.externalLinks.liveVersion} target="_blank" rel="noopener noreferrer"><span>Live Version</span></a> : null}
                {this.props.data.externalLinks.github ? <a href={this.props.data.externalLinks.github} target="_blank" rel="noopener noreferrer"><span>Github Repository</span></a> : null}
              </div>
              <div className="tags">
                {this.props.data.tags.map((tag, ndx) => <span key={ndx}><NavLink to={"/portfolio/"+tag.toLowerCase()} activeClassName="selected">{tag}</NavLink></span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="projectData">
          <h4>{this.props.data.title}</h4>
          <img className="projectImg-xl" src={this.props.data.projectImgPath+"/8-line-height.jpg"} alt={this.props.data.projectImgPath}/>
          <img className="projectImg-sm" src={this.props.data.projectImgPath+"/5-line-height.jpg"} alt={this.props.data.projectImgPath}/>
          <div className="links">
            <div className="tags">
              {this.props.data.tags.map((tag, ndx) => <span key={ndx}><NavLink to={"/portfolio/"+tag.toLowerCase()} activeClassName="selected">{tag}</NavLink></span>)}
            </div>
            <div className="externalLinks">
              {this.props.data.externalLinks.liveVersion ? <a href={this.props.data.externalLinks.liveVersion} target="_blank" rel="noopener noreferrer"><span><img src="/img/icons/live.png" alt="live link icon"/></span></a> : null}
              {this.props.data.externalLinks.github ? <a href={this.props.data.externalLinks.github} target="_blank" rel="noopener noreferrer"><span><img src="/img/icons/projectGithub.png" alt="github icon"/></span></a> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BftProject;
