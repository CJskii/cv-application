import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      work: {
        title: "",
        company: "",
        location: "",
        dates: "",
        description: "",
        id: uniqid(),
        showButton: false,
        showForm: false,
        showDeleteButton: false,
      },
      jobs: [
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
          showDeleteButton: false,
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
          showDeleteButton: false,
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
          showDeleteButton: false,
        },
      ],
      count: 3,
    };

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.showDeleteButton = this.showDeleteButton.bind(this);
    this.hideDeleteButton = this.hideDeleteButton.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  showButton(id) {
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let work = jobs.find((work) => work.id === id);
      work.showButton = true;
      return { jobs };
    });
  }

  hideButton(id) {
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let work = jobs.find((work) => work.id === id);
      work.showButton = false;
      return { jobs };
    });
  }

  button(id) {
    return (
      <button onClick={() => this.showForm(id)} className="editBtn btn">
        EDIT
      </button>
    );
  }

  showDeleteButton(id) {
    console.log("delete show");
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let work = jobs.find((work) => work.id === id);
      work.showDeleteButton = true;
      return { jobs };
    });
  }

  hideDeleteButton(id) {
    console.log("delete hide");
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let work = jobs.find((work) => work.id === id);
      work.showDeleteButton = false;
      return { jobs };
    });
  }

  deleteButton(id) {
    return (
      <button onClick={() => this.deleteJob(id)} className="deleteBtn btn">
        DELETE
      </button>
    );
  }

  deleteJob(id) {
    this.setState({
      jobs: this.state.jobs.filter((task) => task.id !== id),
      count: this.state.count - 1,
    });
  }

  showForm(id) {
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let work = jobs.find((work) => work.id === id);
      work.showForm = true;
      return { jobs };
    });
  }

  form(id) {
    return (
      <form
        className="work-form"
        autoComplete="off"
        onSubmit={(e) => this.handleEditJob(e, id)}
      >
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="Enter job title" />
        <label htmlFor="company">Company</label>
        <input id="company" type="text" placeholder="Enter company name" />
        <label htmlFor="location">Location</label>
        <input id="location" type="text" placeholder="Enter location name" />
        <label htmlFor="dates">Dates</label>
        <input id="dates" type="text" placeholder="JAN 2019 - DEC 2022" />
        <label htmlFor="descwork">Description</label>
        <textarea
          id="descwork"
          type="text"
          placeholder="Enter short description of your duties..."
        />
        <button type="submit" className="submitBtn btn">
          Submit
        </button>
      </form>
    );
  }

  handleEditJob(e, id) {
    e.preventDefault();
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let job = jobs.find((job) => job.id === id);
      job.title = e.target.elements.title.value;
      job.company = e.target.elements.company.value;
      job.location = e.target.elements.location.value;
      job.dates = e.target.elements.dates.value;
      job.description = e.target.elements.descwork.value;
      job.showForm = false;
      return { jobs };
    });
  }

  render() {
    return (
      <div className="work-container">
        <div className="work-wrapper">
          <div className="work-header">
            WORK EXPERIENCE
            <div className="work-divider"></div>
          </div>
          {this.state.jobs.map((work, index) => {
            return (
              <div
                className="work-content-wrapper"
                key={work.id}
                onMouseEnter={() => {
                  this.showButton(work.id);
                  this.showDeleteButton(work.id);
                }}
                onMouseLeave={() => {
                  this.hideButton(work.id);
                  this.hideDeleteButton(work.id);
                }}
              >
                {this.state.jobs.find((job) => job.id === work.id).showButton &&
                  this.button(work.id)}
                {this.state.jobs.find((job) => job.id === work.id)
                  .showDeleteButton && this.deleteButton(work.id)}
                {/* <div className="work-icons">
                  <i className="add-work add"></i>
                  <i className="remove-work remove"></i>
                </div> */}
                {this.state.jobs.find((job) => job.id === work.id).showForm &&
                  this.form(work.id)}
                <div className="work-content">
                  <div className="work-info">
                    <div className="work-title">{work.title}</div>
                    <span className="work-span">
                      {work.company}, {work.location}
                    </span>
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
