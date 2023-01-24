import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      work: [
        {
          title: "Senior manager",
          company: "LEO Company",
          location: "Paris - France",
          dates: "JAN 2016 - DEC 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste, ex official!",
          id: uniqid(),
          showButton: false,
          showForm: false,
        },
        {
          title: "Senior manager",
          company: "LEO Company",
          location: "Paris - France",
          dates: "JAN 2016 - DEC 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste, ex official!",
          id: uniqid(),
          showButton: false,
          showForm: false,
        },
        {
          title: "Senior manager",
          company: "LEO Company",
          location: "Paris - France",
          dates: "JAN 2016 - DEC 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste, ex official!",
          id: uniqid(),
          showButton: false,
          showForm: false,
        },
      ],
      count: 3,
    };

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showButton(id) {
    this.setState((prevState) => {
      let works = this.state.work;
      let work = works.find((work) => work.id === id);
      work.showButton = true;
      return { works };
    });
  }

  hideButton(id) {
    this.setState((prevState) => {
      let works = this.state.work;
      let work = works.find((work) => work.id === id);
      work.showButton = false;
      return { works };
    });
  }

  button(id) {
    return (
      <button onClick={() => this.showForm(id)} className="editBtn btn">
        EDIT
      </button>
    );
  }

  showForm(id) {
    this.setState((prevState) => {
      let works = this.state.work;
      let work = works.find((work) => work.id === id);
      work.showForm = true;
      return { works };
    });
  }

  form() {
    return (
      <form
        className="work-form"
        autoComplete="off"
        onSubmit={(e) => this.onSubmit(e)}
      >
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="Enter job title" />
        <label htmlFor="company">Company</label>
        <input id="company" type="text" placeholder="Enter company name" />
        <label htmlFor="location">Location</label>
        <input id="location" type="text" placeholder="Enter location name" />
        <label htmlFor="dates">Dates</label>
        <input id="dates" type="text" placeholder="JAN 2019 - DEC 2022" />
        <label htmlFor="desc-work">Description</label>
        <textarea
          id="desc-work"
          type="text"
          placeholder="Enter short description of your duties..."
        />
        <button type="submit" className="submitBtn btn">
          Submit
        </button>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.children);
  }

  render() {
    return (
      <div className="work-container">
        <div className="work-wrapper">
          <div className="work-header">
            WORK EXPERIENCE
            <div className="work-divider"></div>
          </div>
          {this.state.work.map((work, index) => {
            return (
              <div
                className="work-content-wrapper"
                key={work.id}
                onMouseEnter={() => this.showButton(work.id)}
                onMouseLeave={() => this.hideButton(work.id)}
              >
                {this.state.work.find((job) => job.id === work.id).showButton &&
                  this.button(work.id)}
                {/* <div className="work-icons">
                  <i className="add-work add"></i>
                  <i className="remove-work remove"></i>
                </div> */}
                {this.state.work.find((job) => job.id === work.id).showForm &&
                  this.form()}
                <div className="work-content">
                  <div className="work-info">
                    <div className="work-title">{work.title}</div>
                    <span className="work-span">{work.company}</span>
                  </div>
                  <span className="work-dates">{work.dates}</span>
                </div>
                <div className="work-text">{work.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Work;
