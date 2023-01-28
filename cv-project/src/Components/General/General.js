import React, { Component } from "react";
import Name from "./Name";
import Underline from "./Underline";
import Title from "./Title";
import "./General.css";

class General extends Component {
  constructor() {
    super();
    this.state = {
      user: { name: "SATOSHI NAKAMOTO", title: "BITCOIN CREATOR" },
      showEditBtn: false,
      showForm: false,
    };

    this.showEditBtn = this.showEditBtn.bind(this);
    this.editForm = this.editForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.submitForm = this.handleFormSubmit.bind(this);
  }

  showEditBtn() {
    return (
      <button className="editBtn btn" onClick={this.showForm}>
        EDIT
      </button>
    );
  }

  showForm() {
    this.setState({ showForm: true });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let name = document.querySelector(".name-input");
    let title = document.querySelector(".title-input");
    this.setState({
      user: {
        name: name.value.toUpperCase(),
        title: title.value.toUpperCase(),
      },
      showForm: false,
    });
  }

  editForm() {
    return (
      <form
        className="name-form"
        autoComplete="off"
        onSubmit={(e) => this.submitForm(e)}
      >
        <label htmlFor="name">Enter your name</label>
        <input id="name" className="name-input" type="text" />
        <label htmlFor="title">Enter your title</label>
        <input id="title" className="title-input" type="text" />
        <button type="submit" className="submitBtn btn">
          Submit
        </button>
      </form>
    );
  }

  render() {
    const { user } = this.state;
    return (
      <div
        className="wrapper"
        onMouseEnter={() => this.setState({ showEditBtn: true })}
        onMouseLeave={() => this.setState({ showEditBtn: false })}
      >
        <Name user={user} />
        <Underline />
        <Title user={user} />
        {this.state.showEditBtn && this.showEditBtn()}
        {this.state.showForm && this.editForm()}
      </div>
    );
  }
}

export default General;
