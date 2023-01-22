import React, { Component } from "react";
import Draggable from "react-draggable";

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
          <input id="country" className="country-form" type="text" />
          <label htmlFor="phone">Phone number</label>
          <input id="phone" className="number-form" type="tel" />
          <label htmlFor="email">Email address</label>
          <input id="email" className="email-form" type="email" />
          <button type="submit" className="submitBtn btn">
            Submit
          </button>
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
        <div className="contact-wrapper">
          <span className="card-header">CONTACT</span>
          <div className="card-divider"></div>
          <div className="country">
            <i className="maps-icon"></i>
            {contact.country}
          </div>
          <div className="telephone">
            <i className="phone-icon"></i>
            {contact.telephone}
          </div>
          <div className="email">
            <i className="email-icon"></i>
            {contact.email}
          </div>
          {this.state.showEditBtn && this.showEditButton()}
          {this.state.showForm && this.displayForm()}
        </div>
      </div>
    );
  }
}

export default Contact;
