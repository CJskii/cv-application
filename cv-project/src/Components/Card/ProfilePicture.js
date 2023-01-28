import React, { Component } from "react";
import Draggable from "react-draggable";

class ProfilePicture extends Component {
  constructor() {
    super();

    this.state = {
      pfp: null,
      reupload: false,
    };
    this.reupload = this.reupload.bind(this);
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

  showInput() {
    return <input type="file" onChange={(e) => this.handleFileSelect(e)} />;
  }

  reupload() {
    if (this.state.reupload) {
      this.setState({
        reupload: false,
      });
    } else {
      this.setState({
        reupload: true,
      });
    }
  }

  render() {
    return (
      <div className="pfp-container">
        {this.state.reupload && this.showInput()}
        {this.state.pfp === null ? (
          <Draggable>
            <div className="profile-picture">
              <input type="file" onChange={(e) => this.handleFileSelect(e)} />
            </div>
          </Draggable>
        ) : (
          <img
            style={{ cursor: "pointer" }}
            className="profile-picture"
            src={this.state.pfp}
            alt="pfp"
            onClick={this.reupload}
          />
        )}
      </div>
    );
  }
}

export default ProfilePicture;
