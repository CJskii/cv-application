import React, { Component } from "react";
//import Draggable from "react-draggable";

class Links extends Component {
  constructor(props) {
    super();

    this.state = {
      links: {
        github: "YourGithubAddress.com",
        linkedin: "YourLinkedInAddress.com",
        twitter: "twitter.com/yourhandle",
        portfolio: "linktoportfolio.com",
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
    this.setState({
      showForm: true,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let github = document.querySelector(".github-input");
    let linkedin = document.querySelector(".linkedin-input");
    let twitter = document.querySelector(".twitter-input");
    let portfolio = document.querySelector(".portfolio-input");
    this.setState({
      links: {
        github: github.value,
        linkedin: linkedin.value,
        twitter: twitter.value,
        portfolio: portfolio.value,
      },
      showForm: false,
    });
  }

  editForm() {
    return (
      //<Draggable>
      <form
        className="links-form"
        autoComplete="off"
        onSubmit={(e) => this.handleFormSubmit(e)}
      >
        <label htmlFor="github">Github</label>
        <input id="github" className="github-input" type="text" />
        <label htmlFor="linkedin">LinkedIn</label>
        <input id="linkedin" className="linkedin-input" type="text" />
        <label htmlFor="twitter">Twitter</label>
        <input id="twitter" className="twitter-input" type="text" />
        <label htmlFor="portfolio">Portfolio</label>
        <input id="portfolio" className="portfolio-input" type="text" />
        <button type="twitter" className="submitBtn btn">
          Submit
        </button>
      </form>
      // </Draggable>
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
        <span className="card-header">MY LINKS</span>
        {this.state.showEditBtn && this.showEditButton()}
        <div className="links-wrapper">
          <div className="card-divider"></div>
          {links.github !== "" ? (
            <div className="link-wrapper">
              <i className="github-link-icon"></i>
              <div className="github-link">{links.github}</div>
            </div>
          ) : null}
          {links.linkedin !== "" ? (
            <div className="link-wrapper">
              <i className="linkedin-link-icon"></i>
              <div className="linkedin">{links.linkedin}</div>
            </div>
          ) : null}
          {links.twitter !== "" ? (
            <div className="link-wrapper">
              <i className="twitter-link-icon"></i>
              <div className="twitter">{links.twitter}</div>
            </div>
          ) : null}
          {links.twitter !== "" ? (
            <div className="link-wrapper">
              <i className="portfolio-link-icon"></i>
              <div className="portfolio">{links.portfolio}</div>
            </div>
          ) : null}

          {this.state.showForm && this.displayForm()}
        </div>
      </div>
    );
  }
}

export default Links;
