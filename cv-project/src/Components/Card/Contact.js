import React, { Component } from "react";
import Draggable from "react-draggable";
import Icons from "../Icons";

class Contact extends Component {
  constructor(props) {
    super();

    this.state = {
      contact: {
        country: "London, United Kingdom",
        telephone: "+44 123 456 789",
        email: "info@youremail.com",
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

  editForm() {
    return (
      <Draggable>
        <form
          className="contact-form"
          autoComplete="off"
          onSubmit={(e) => this.handleFormSubmit(e)}
        >
          <label htmlFor="country">City and country</label>
          <input
            placeholder="London, United Kingdom"
            id="country"
            className="country-form"
            type="text"
            required
          />
          <label htmlFor="phone">Phone number</label>
          <input
            placeholder="+44 123 456 789"
            id="phone"
            className="number-form"
            type="tel"
            required
          />
          <label htmlFor="email">Email address</label>
          <input
            placeholder="youremail@address.com"
            id="email"
            className="email-form"
            type="email"
            required
          />
          <div className="btn-wrapper">
            <button type="submit" className="submitBtn btn">
              Submit
            </button>
            <button
              type="button"
              onClick={(e) => this.setState({ showForm: false })}
              className="closeBtn btn"
            >
              Close
            </button>
          </div>
        </form>
      </Draggable>
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let country = document.querySelector(".country-form");
    let phone = document.querySelector(".number-form");
    let email = document.querySelector(".email-form");
    this.setState({
      contact: {
        country: country.value,
        telephone: phone.value,
        email: email.value,
      },
      showForm: false,
    });
  }

  render() {
    const { contact } = this.state;

    return (
      <div
        className="contact-container"
        onMouseEnter={() => {
          this.setState({ showEditBtn: true });
        }}
        onMouseLeave={() => {
          this.setState({ showEditBtn: false });
        }}
      >
        <span className="card-header">CONTACT</span>
        {this.state.showEditBtn && this.showEditButton()}
        <div className="contact-wrapper">
          <div className="card-divider"></div>
          <div className="country">
            <img className="maps-icon" src={Icons.maps} alt="map" />
            {contact.country}
          </div>
          <div className="telephone">
            <img className="phone-icon" src={Icons.tel} alt="tel" />
            {contact.telephone}
          </div>
          <div className="email">
            <img className="email-icon" src={Icons.mail} alt="mail" />
            {contact.email}
          </div>

          {this.state.showForm && this.displayForm()}
        </div>
      </div>
    );
  }
}

export default Contact;
