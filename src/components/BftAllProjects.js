import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/BftAllProjects.sass';
import BftProject from './BftProject';

class BftAllProjects extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator", "AI"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        },
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator", "AU"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        },
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator", "AU"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        },
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator", "AU"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        },
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator", "AU"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        },
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator", "AU"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        },
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator", "AU"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        }
      ]
    }
  }

  render() {
    let projects = this.props.match.params.filter ? this.state.projects.filter(p => p.tags.filter(tag => tag.toLowerCase() === this.props.match.params.filter.toLowerCase()).length > 0) : this.state.projects;
    return (
      <Row className="BftAllProjects">
        {projects.map((projData, ndx) => <Col lg="6" md="12"><BftProject data={projData}/></Col> )}
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
