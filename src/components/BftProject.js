import React, { Component } from 'react';
import '../styles/BftProject.sass';

class BftProject extends Component {

  render() {
    return (
      <div className="BftProject">
        <h4>{this.props.data.title}</h4>
        <img className="projectImg" src={this.props.data.projectImgPath} alt="BFTawfik Twitter Bot 2"/>
        <div className="links">
          <div className="tags">
            {this.props.data.tags.map((tag, ndx) => <span key="ndx">{tag}</span>)}
            <span>{this.props.data.tags[0]}</span>
          </div>
          <div className="externalLinks">
            {this.props.data.externalLinks.liveVersion ? <span><img src="/img/icons/live.png" alt="BFTawfik Twitter Bot 2"/></span> : null}
            {this.props.data.externalLinks.github ? <span><img src="/img/icons/projectGithub.png" alt="BFTawfik Twitter Bot 2"/></span> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default BftProject;
