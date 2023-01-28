import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      description: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official!",
      },
      showButton: false,
      showForm: false,
    };

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  showButton() {
    this.setState({
      showButton: true,
    });
  }

  showForm() {
    this.setState({
      showForm: true,
    });
  }

  hideButton() {
    this.setState({
      showButton: false,
    });
  }

  submitForm(e) {
    e.preventDefault();
    let textarea = document.getElementById("text-area");
    this.setState({
      description: { text: textarea.value },
      showForm: false,
    });
  }

  button() {
    return (
      <button className="editBtn btn" onClick={this.showForm}>
        EDIT
      </button>
    );
  }

  editForm() {
    return (
      <form
        className="profile-form"
        autoComplete="off"
        onSubmit={(e) => this.submitForm(e)}
      >
        <label htmlFor="text-area">Your profile description</label>
        <textarea
          placeholder="Type short introduction about yourself..."
          id="text-area"
          type="text"
          required
        />
        <div className="btn-wrapper">
          <button type="submit" className="submitBtn btn">
            Submit
          </button>
          <button
            type="button"
            onClick={(e) => this.setState({ showForm: false })}
            className="closeBtn btn"
          >
            Close
          </button>
        </div>
      </form>
    );
  }

  render() {
    const { description } = this.state;
    return (
      <div
        className="profile-container"
        onMouseEnter={this.showButton}
        onMouseLeave={this.hideButton}
      >
        {this.state.showButton && this.button()}

        <div className="profile-wrapper">
          <div className="profile-header">
            PROFILE
            <div className="profile-divider"></div>
          </div>

          <div className="profile-text">{description.text}</div>
        </div>
        {this.state.showForm && this.editForm()}
      </div>
    );
  }
}

export default Profile;
