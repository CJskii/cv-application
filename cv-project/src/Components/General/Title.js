import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { user } = this.props;

    return (
      <div className="title-wrapper">
        <div className="title" onClick={this.editing}>
          {user.title}
        </div>
      </div>
    );
  }
}

export default Title;
