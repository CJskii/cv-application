import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";

class Name extends Component {
  constructor(props) {
    super();

    this.state = {
      editing: false,
    };

    this.editing = this.handleClickName.bind(this);
    this.saveName = this.handleSaveName.bind(this);
  }

  handleClickName() {
    this.setState({
      editing: true,
    });
  }

  handleSaveName() {
    this.setState({
      editing: false,
    });
  }

  render() {
    const { user, nameChange } = this.props;
    const { editing } = this.state;

    if (editing === true) {
      return (
        <div className="name-wrapper">
          <div className="name-container">
            <input
              className="name-input"
              value={user.name}
              type="text"
              onChange={(e) => nameChange(e)}
            />
            <div className="icon">
              <FaCheck onClick={this.saveName} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="name-wrapper">
          <h1 className="name" onClick={this.editing}>
            {user.name}
          </h1>
        </div>
      );
    }
  }
}

export default Name;
