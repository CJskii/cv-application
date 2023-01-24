import React, { Component } from "react";
import Profile from "./Profile";
import Work from "./Work";
import Skills from "./Skills";
import "./Main.css";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-wrapper">
        <Profile />
        <Work />
        <Skills />
      </div>
    );
  }
}

export default Main;
