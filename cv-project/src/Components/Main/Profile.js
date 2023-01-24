import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      description: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official!",
      },
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
      </div>
    );
  }
}

export default Profile;
