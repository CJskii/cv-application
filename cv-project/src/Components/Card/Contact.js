import React, { useState } from "react";
import Draggable from "react-draggable";
import Icons from "../Icons";

const Contact = () => {
  const [country, setCountry] = useState("London, United Kingdom");
  const [telephone, setTelephone] = useState("+44 123 456 789");
  const [email, setEmail] = useState("info@youremail.com");
  const [editBtn, setEditBtn] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const showEditBtn = () => {
    setEditBtn(true);
  };

  const hideEditBtn = () => {
    setEditBtn(false);
  };

  const displayForm = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  const showEditButton = () => {
    return (
      <button className="editBtn btn" onClick={displayForm}>
        EDIT
      </button>
    );
  };

  const ContactForm = () => {
    return (
      <Draggable>
        <form className="contact-form" autoComplete="off" onSubmit={hideForm}>
          <label htmlFor="country">City and country</label>
          <input
            placeholder="London, United Kingdom"
            id="country"
            className="country-form"
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="phone">Phone number</label>
          <input
            placeholder="+44 123 456 789"
            id="phone"
            className="number-form"
            type="tel"
            required
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <label htmlFor="email">Email address</label>
          <input
            placeholder="youremail@address.com"
            id="email"
            className="email-form"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      className="contact-container"
      onMouseEnter={showEditBtn}
      onMouseLeave={hideEditBtn}
    >
      <span className="card-header">CONTACT</span>
      {editBtn && showEditButton()}
      <div className="contact-wrapper">
        <div className="card-divider"></div>
        <div className="country">
          <img className="maps-icon" src={Icons.maps} alt="map" />
          {country}
        </div>
        <div className="telephone">
          <img className="phone-icon" src={Icons.tel} alt="tel" />
          {telephone}
        </div>
        <div className="email">
          <img className="email-icon" src={Icons.mail} alt="mail" />
          {email}
        </div>

        {showForm && ContactForm()}
      </div>
    </div>
  );
};

export default Contact;
