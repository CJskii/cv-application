import React, { Component } from "react";

class Links extends Component {
  constructor(props) {
    super();

    this.state = {
      showEditBtn: false,
      showForm: false,
    };

    this.showEditButton = this.showEditButton.bind(this);
  }

  showEditButton() {
    return <button className="editBtn btn">EDIT</button>;
  }

  render() {
    const { links } = this.props;

    return (
      <div
        className="links-container"
        onMouseEnter={() => {
          this.setState({ showEditBtn: true });
        }}
        onMouseLeave={() => {
          this.setState({ showEditBtn: false });
        }}
      >
        <div className="links-wrapper">
          <span className="card-header">LINKS</span>
          <div className="card-divider"></div>
          <div className="github-link">{links.github}</div>
          <div className="linkedin">{links.linkedin}</div>
          <div className="twitter">{links.twitter}</div>
          {this.state.showEditBtn && this.showEditButton()}
        </div>
      </div>
    );
  }
}

export default Links;
