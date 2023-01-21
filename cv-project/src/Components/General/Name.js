import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { user } = this.props;
    return (
      <div className="name-wrapper">
        <h1 className="name">{user.name}</h1>
      </div>
    );
  }
}

export default Name;
