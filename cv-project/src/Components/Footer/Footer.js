import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Created by </p>
        <a
          className="link"
          rel="noreferrer"
          href="https://github.com/CJskii/cv-application"
          target="_blank"
        >
          CJski
        </a>
        <i className="github"></i>
      </div>
    );
  }
}

export default Footer;
