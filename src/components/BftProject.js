import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/BftProject.sass';

class BftProject extends Component {

  render() {
    return (
      <div className="BftProject">
        <h4>{this.props.data.title}</h4>
        <img className="projectImg-xl" src={this.props.data.projectImgPath+"/8-line-height.jpg"} alt="BFTawfik Twitter Bot 2"/>
        <img className="projectImg-sm" src={this.props.data.projectImgPath+"/5-line-height.jpg"} alt="BFTawfik Twitter Bot 2"/>
        <div className="links">
          <div className="tags">
            {this.props.data.tags.map((tag, ndx) => <span key={ndx}><NavLink to={"/portfolio/"+tag.toLowerCase()} activeClassName="selected">{tag}</NavLink></span>)}
          </div>
          <div className="externalLinks">
            {this.props.data.externalLinks.liveVersion ? <a href={this.props.data.externalLinks.liveVersion} target="_blank" rel="noopener noreferrer"><span><img src="/img/icons/live.png" alt="BFTawfik Twitter Bot 2"/></span></a> : null}
            {this.props.data.externalLinks.github ? <a href={this.props.data.externalLinks.github} target="_blank" rel="noopener noreferrer"><span><img src="/img/icons/projectGithub.png" alt="BFTawfik Twitter Bot 2"/></span></a> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default BftProject;
