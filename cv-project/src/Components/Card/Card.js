import React, { Component } from "react";
import "./Card.css";
import Contact from "./Contact";
import Education from "./Education";
import Links from "./Links";

class Card extends Component {
  constructor(props) {
    super();

    this.state = {
      photo: "your photo here",
      links: {
        github: "YourGithubAddress.com",
        linkedin: "YourLinkedInAddress.com",
        twitter: "twitter.com/yourhandle",
      },
    };
  }

  render() {
    const { links } = this.state;
    return (
      <div className="card-wrapper">
        <img className="profile-picture" alt="pfp"></img>
        <Contact />
        <Education />
        <Links links={links} />
        {/* // Card // Contact // Education // Links */}
      </div>
    );
  }
}

export default Card;
