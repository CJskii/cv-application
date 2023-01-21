import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";

class Title extends Component {
  constructor(props) {
    super();

    this.state = {
      editing: false,
    };

    this.editing = this.handleClickTitle.bind(this);
    this.saveTitle = this.handleSaveTitle.bind(this);
  }

  handleClickTitle() {
    this.setState({
      editing: true,
    });
  }

  handleSaveTitle() {
    this.setState({
      editing: false,
    });
  }

  render() {
    const { user, titleChange } = this.props;
    const { editing } = this.state;

    if (editing === true) {
      return (
        <div className="title-wrapper">
          <div className="title-container">
            <input
              className="title-input"
              value={user.title}
              type="text"
              onChange={(e) => titleChange(e)}
            />
            <div className="icon">
              <FaCheck onClick={this.saveTitle} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="title-wrapper">
          <div className="title" onClick={this.editing}>
            {user.title}
          </div>
        </div>
      );
    }
  }
}

export default Title;
