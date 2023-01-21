import React, { Component } from "react";
import Name from "./Name";
import Underline from "./Underline";
import Title from "./Title";
import "./General.css";
import { FaEdit } from "react-icons/fa";

class General extends Component {
  constructor() {
    super();
    this.state = {
      user: { name: "MICHAEL JORDAN", title: "CREATIVE DIRECTOR" },
      name: null,
      title: null,
    };

    this.nameChange = this.handleNameChange.bind(this);
    this.titleChange = this.handleTitleChange.bind(this);
  }

  handleNameChange(e) {
    this.setState((prevState) => {
      let user = this.state.user;
      user.name = e.target.value;
      return { user };
    });
  }

  handleTitleChange(e) {
    this.setState((prevState) => {
      let user = this.state.user;
      user.title = e.target.value;
      return { user };
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="wrapper">
        <Name user={user} nameChange={this.nameChange} />
        <Underline />
        <Title user={user} titleChange={this.titleChange} />
      </div>
    );
  }
}

export default General;
