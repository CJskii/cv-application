import React, { Component } from "react";

class ProfilePicture extends Component {
  constructor() {
    super();

    this.state = {
      pfp: null,
    };
  }

  handleFileSelect(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        pfp: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="pfp-container">
        {this.state.pfp === null ? (
          <div className="profile-picture">
            <input type="file" onChange={(e) => this.handleFileSelect(e)} />
          </div>
        ) : (
          <img className="profile-picture" src={this.state.pfp} alt="pfp" />
        )}
      </div>
    );
  }
}

export default ProfilePicture;
