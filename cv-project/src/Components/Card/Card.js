import React, { Component } from "react";
import "./Card.css";
import Contact from "./Contact";
import Education from "./Education";
import Links from "./Links";
import ProfilePicture from "./ProfilePicture";

class Card extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="card-wrapper">
        {/* <img className="profile-picture" alt="pfp"></img> */}
        <ProfilePicture />
        <Contact />
        <Education />
        <Links />
        {/* // Card // Contact // Education // Links */}
      </div>
    );
  }
}

export default Card;
