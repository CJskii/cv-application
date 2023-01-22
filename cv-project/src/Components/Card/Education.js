import React, { Component } from "react";
import Draggable from "react-draggable";

class Education extends Component {
  constructor(props) {
    super();

    this.state = {
      education: {
        title: "Master in Javascript",
        dates: "JAN 2019 - DEC 2022",
        uni: "Oxford University - UK",
        title2: "Master in CS",
        dates2: "JAN 2015 - DEC 2018",
        uni2: "London University - UK",
      },
      showEditBtn: false,
      showForm: false,
      count: 2,
    };

    this.showEditButton = this.showEditButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.displayForm = this.editForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  showForm() {
    this.setState({
      showForm: true,
    });
  }

  addEducation() {
    let count = this.state.count;
    if (count < 2) {
      this.setState({
        count: 2,
      });
    } else {
      return;
    }
  }

  removeEducation() {
    this.setState({
      count: 1,
    });
  }

  editForm() {
    let count = this.state.count;
    if (count === 1) {
      return (
        <Draggable>
          <form
            className="education-form"
            autoComplete="off"
            onSubmit={(e) => this.handleFormSubmit(e)}
          >
            <i className="add" onClick={this.addEducation}></i>
            <label htmlFor="title">Degree</label>
            <input id="title" className="title-form t1" type="text" />
            <label htmlFor="dates">Dates</label>
            <input id="dates" className="dates-form d1" type="text" />
            <label htmlFor="uni">University/School</label>
            <input id="uni" className="uni-form u1" type="text" />
            <button type="submit" className="submitBtn btn">
              Submit
            </button>
          </form>
        </Draggable>
      );
    } else {
      return (
        <Draggable>
          <form
            className="education-form"
            autoComplete="off"
            onSubmit={(e) => this.handleFormSubmit(e)}
          >
            <i className="remove" onClick={this.removeEducation}></i>
            <label htmlFor="title1">Degree 1</label>
            <input id="title1" className="title-form t1" type="text" />
            <label htmlFor="dates1">Dates 1</label>
            <input id="dates1" className="dates-form d1" type="text" />
            <label htmlFor="uni1">University/School 1</label>
            <input id="uni1" className="uni-form u1" type="text" />
            <label htmlFor="title2">Degree 2</label>
            <input id="title2" className="title-form t2" type="text" />
            <label htmlFor="dates2">Dates 2</label>
            <input id="dates2" className="dates-form d2" type="text" />
            <label htmlFor="uni2">University/School 2</label>
            <input id="uni2" className="uni-form u2" type="text" />
            <button type="submit" className="submitBtn btn">
              Submit
            </button>
          </form>
        </Draggable>
      );
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let title = document.querySelector(".t1");
    let dates = document.querySelector(".d1");
    let uni = document.querySelector(".u1");
    let title2 = document.querySelector(".t2");
    let dates2 = document.querySelector(".d2");
    let uni2 = document.querySelector(".u2");
    if (this.state.count === 1) {
      this.setState({
        education: {
          title: title.value,
          dates: dates.value,
          uni: uni.value,
        },
        showForm: false,
      });
    } else {
      this.setState({
        education: {
          title: title.value,
          dates: dates.value,
          uni: uni.value,
          title2: title2.value,
          dates2: dates2.value,
          uni2: uni2.value,
        },
        showForm: false,
      });
    }
  }

  showEditButton() {
    return (
      <button className="editBtn btn" onClick={this.showForm}>
        EDIT
      </button>
    );
  }

  render() {
    const { education } = this.state;
    if (this.state.count === 1) {
      return (
        <div
          className="education-container"
          onMouseEnter={() => {
            this.setState({ showEditBtn: true });
          }}
          onMouseLeave={() => {
            this.setState({ showEditBtn: false });
          }}
        >
          <div className="education-wrapper">
            <span className="card-header">EDUCATION</span>
            <div className="card-divider"></div>
            <div className="education-title">{education.title}</div>
            <div className="dates">{education.dates}</div>
            <div className="uni">{education.uni}</div>
            {this.state.showEditBtn && this.showEditButton()}
            {this.state.showForm && this.displayForm()}
          </div>
        </div>
      );
    } else if (this.state.count === 2) {
      return (
        <div
          className="education-container"
          onMouseEnter={() => {
            this.setState({ showEditBtn: true });
          }}
          onMouseLeave={() => {
            this.setState({ showEditBtn: false });
          }}
        >
          <span className="card-header">EDUCATION</span>
          {this.state.showEditBtn && this.showEditButton()}
          <div className="education-wrapper">
            <div className="card-divider"></div>
            <div className="education-title">{education.title}</div>
            <div className="dates">{education.dates}</div>
            <div className="uni">{education.uni}</div>

            {this.state.showForm && this.displayForm()}
          </div>
          <div className="education-wrapper">
            <div className="education-title">{education.title2}</div>
            <div className="dates">{education.dates2}</div>
            <div className="uni">{education.uni2}</div>
          </div>
        </div>
      );
    }
  }
}

export default Education;
