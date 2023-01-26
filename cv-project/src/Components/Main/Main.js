import React, { Component } from "react";
import Profile from "./Profile";
import Work from "./Work";
import Skills from "./Skills";
import "./Main.css";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      workCount: 3,
      skillCount: 6,
    };

    this.workCountUp = this.workCountUp.bind(this);
    this.workCountDown = this.workCountDown.bind(this);
    this.skillCountUp = this.skillCountUp.bind(this);
    this.skillCountDown = this.skillCountDown.bind(this);
    this.workCount = this.state.workCount;
  }

  workCountUp() {
    this.setState({
      workCount: this.state.workCount + 1,
    });
  }

  workCountDown() {
    this.setState({
      workCount: this.state.workCount - 1,
    });
  }

  skillCountUp() {
    this.setState({
      skillCount: this.state.skillCount + 1,
    });
  }

  skillCountDown() {
    this.setState({
      skillCount: this.state.skillCount - 1,
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        <Profile />
        <Work
          workCountUp={this.workCountUp}
          workCountDown={this.workCountDown}
          workCount={this.state.workCount}
        />
        <Skills
          skillCountUp={this.skillCountUp}
          skillCountDown={this.skillCountDown}
          workCount={this.state.workCount}
        />
      </div>
    );
  }
}

export default Main;
