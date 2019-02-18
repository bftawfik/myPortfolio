import React, { Component } from 'react';
import '../styles/BftAllProjects.sass';
import Container from 'react-bootstrap/Container';
import BftProject from './BftProject';

class BftAllProjects extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        },
        {
          title: "Twitter Bot 2",
          projectImgPath: "/img/projects/bftawfikbot2.png",
          tags: ["Javascript", "Node.js", "Twit", "Twitter Api", "Git", "Githup", "Illustrator"],
          externalLinks: {
            github: "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
            liveVersion: "https://twitter.com/2Bftawfik",
          }
        }
      ]
    }
  }

  render() {
    return (
      <Container className="BftAllProjects">
        {this.state.projects.map((projData, ndx) => <BftProject data={projData}/> )}
      </Container>
    );
  }
}

export default BftAllProjects;
