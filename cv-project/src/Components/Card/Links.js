import React, { Component } from "react";
import Draggable from "react-draggable";

class Links extends Component {
  constructor(props) {
    super();

    this.state = {
      links: {
        github: "YourGithubAddress.com",
        linkedin: "YourLinkedInAddress.com",
        twitter: "twitter.com/yourhandle",
      },
      showEditBtn: false,
      showForm: false,
    };

    this.showEditButton = this.showEditButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.displayForm = this.editForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  showEditButton() {
    return (
      <button className="editBtn btn" onClick={this.showForm}>
        EDIT
      </button>
    );
  }

  showForm() {
    console.log("click");
    this.setState({
      showForm: true,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("submit");
    let github = document.querySelector(".github-input");
    let linkedin = document.querySelector(".linkedin-input");
    let twitter = document.querySelector(".twitter-input");
    this.setState({
      links: {
        github: github.value,
        linkedin: linkedin.value,
        twitter: twitter.value,
      },
      showForm: false,
    });
  }

  editForm() {
    return (
      <Draggable>
        <form
          className="links-form"
          autoComplete="off"
          onSubmit={(e) => this.handleFormSubmit(e)}
        >
          <label htmlFor="github">Github</label>
          <input id="github" className="github-input" type="text" />
          <label htmlFor="linkedin">LinkedIn</label>
          <input id="linkedin" className="linkedin-input" type="text" />
          <label htmlFor="uni">Twitter</label>
          <input id="twitter" className="twitter-input" type="text" />
          <button type="twitter" className="submitBtn btn">
            Submit
          </button>
        </form>
      </Draggable>
    );
  }

  render() {
    const { links } = this.state;

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
          {links.github != "" ? (
            <div className="link-wrapper">
              <i className="github-link-icon"></i>
              <div className="github-link">{links.github}</div>
            </div>
          ) : null}
          {links.linkedin != "" ? (
            <div className="link-wrapper">
              <i className="linkedin-link-icon"></i>
              <div className="linkedin">{links.linkedin}</div>
            </div>
          ) : null}
          {links.twitter != "" ? (
            <div className="link-wrapper">
              <i className="twitter-link-icon"></i>
              <div className="twitter">{links.twitter}</div>
            </div>
          ) : null}
          {this.state.showEditBtn && this.showEditButton()}
          {this.state.showForm && this.displayForm()}
        </div>
      </div>
    );
  }
}

export default Links;
