import React, { Component } from "react";
import Name from "./Name";
import Underline from "./Underline";
import Title from "./Title";
import "./General.css";

class General extends Component {
  constructor() {
    super();
    this.state = {
      user: { name: "MICHAEL JORDAN", title: "CREATIVE DIRECTOR" },
    };
  }
  render() {
    const { user } = this.state;
    return (
      <div className="wrapper">
        <Name user={user} />
        <Underline />
        <Title user={user} />
      </div>
    );
  }
}

export default General;
