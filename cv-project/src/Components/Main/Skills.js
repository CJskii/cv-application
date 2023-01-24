import React, { Component } from "react";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skill1: "Javascript",
      skill2: "React",
      skill3: "Git version control",
      skill4: "NodeJS",
      skill5: "NextJS",
      skill6: "Solidity",
      skill7: "Vue",
      skill8: "Data structures and algorithms",
      skill9: "Database and SQL",
      skill10: "Cloud computing",
      skill11: "Web development",
      skill12: "Problem solving",
      skill13: "Curiosity",
      skill14: "Adaptability",
      skill15: "Time management",
      skill16: "Accountability",
      skill17: "Teamwork and conflict resolution",
      skill18: "Communication",
      skill19: "Angular",
      skill20: "ExpressJS",
      skill21: "Django and Flask",
      skill22: "Analytical skills",
      showButton: false,
    };

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
  }

  showButton() {
    this.setState({
      showButton: true,
    });
  }

  hideButton() {
    this.setState({
      showButton: false,
    });
  }

  button() {
    return <button className="editBtn btn">EDIT</button>;
  }

  render() {
    return (
      <div
        className="skills-container"
        onMouseEnter={this.showButton}
        onMouseLeave={this.hideButton}
      >
        {this.state.showButton && this.button()}
        <div className="skills-wrapper">
          <div className="skills-header">
            SKILLS
            <div className="skills-divider"></div>
          </div>
          <div className="skills-content">
            <span>Web development</span>
            <span>Javascript</span>
            <span>React</span>
            <span>NodeJS</span>
            <span>Git version control</span>
            <span>Database</span>
          </div>

          {/* <div className="skills-text">{description.text}</div> */}
        </div>
      </div>
    );
  }
}

export default Skills;
