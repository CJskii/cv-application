import React, { useState } from "react";
import Draggable from "react-draggable";
import Icons from "../Icons";

const Links = () => {
  const [github, setGithub] = useState("YourGithubAddress.com");
  const [linkedin, setLinkedin] = useState("YourLinkedinAddress.com");
  const [twitter, setTwitter] = useState("twitter.com/yourhandle");
  const [portfolio, setPortfolio] = useState("linktoportfolio.com");
  const [editBtn, setEditBtn] = useState(false);
  const [form, setForm] = useState(false);

  const showEditBtn = () => {
    setEditBtn(true);
  };

  const hideEditBtn = () => {
    setEditBtn(false);
  };
  const showForm = () => {
    setForm(true);
  };

  const hideForm = () => {
    setForm(false);
  };

  const showEditButton = () => {
    return (
      <button className="editBtn btn" onClick={showForm}>
        EDIT
      </button>
    );
  };

  const displayForm = () => {
    return (
      <Draggable>
        <form className="links-form" autoComplete="off" onSubmit={hideForm}>
          <label htmlFor="github">Github</label>
          <input
            placeholder="github.com/yourhandle"
            id="github"
            className="github-input"
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            placeholder="linkedin.com/yourhandle"
            id="linkedin"
            className="linkedin-input"
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <label htmlFor="twitter">Twitter</label>
          <input
            placeholder="twitter.com/yourhandle"
            id="twitter"
            className="twitter-input"
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
          <label htmlFor="portfolio">Portfolio</label>
          <input
            placeholder="portfolio.xyz"
            id="portfolio"
            className="portfolio-input"
            type="text"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
          <div className="btn-wrapper">
            <button type="submit" className="submitBtn btn">
              Submit
            </button>
            <button type="button" onClick={hideForm} className="closeBtn btn">
              Close
            </button>
          </div>
        </form>
      </Draggable>
    );
  };

  return (
    <div
      className="links-container"
      onMouseEnter={showEditBtn}
      onMouseLeave={hideEditBtn}
    >
      <span className="card-header">MY LINKS</span>
      {editBtn && showEditButton()}
      <div className="links-wrapper">
        <div className="card-divider"></div>
        {github !== "" ? (
          <div className="link-wrapper">
            <img className="github-link-icon" src={Icons.github} alt="github" />
            <div className="github-link"> {github}</div>
          </div>
        ) : null}
        {linkedin !== "" ? (
          <div className="link-wrapper">
            <img
              className="linkedin-link-icon"
              src={Icons.linkedin}
              alt="linkedin"
            />
            <div className="linkedin"> {linkedin}</div>
          </div>
        ) : null}
        {twitter !== "" ? (
          <div className="link-wrapper">
            <img
              className="twitter-link-icon"
              src={Icons.twitter}
              alt="twitter"
            />
            <div className="twitter"> {twitter}</div>
          </div>
        ) : null}
        {portfolio !== "" ? (
          <div className="link-wrapper">
            <img
              className="portfolio-link-icon"
              src={Icons.portfolio}
              alt="portfolio"
            />
            <div className="portfolio"> {portfolio}</div>
          </div>
        ) : null}

        {form && displayForm()}
      </div>
    </div>
  );
};

export default Links;
