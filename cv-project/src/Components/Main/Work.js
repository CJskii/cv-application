import React, { Component } from "react";
import uniqid from "uniqid";
import Draggable from "react-draggable";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      work: this.workTemplate(),
      jobs: [this.workTemplate(), this.workTemplate(), this.workTemplate()],
    };

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.showDeleteButton = this.showDeleteButton.bind(this);
    this.hideDeleteButton = this.hideDeleteButton.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.addJob = this.handleAddingTaks.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  workTemplate() {
    return {
      title: "Senior Manager",
      company: "YOUR Company",
      location: "Paris - France",
      dates: "JAN 2020 - DEC 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste, ex official!",
      id: uniqid(),
      showButton: false,
      showForm: false,
      showDeleteButton: false,
    };
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
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let work = jobs.find((work) => work.id === id);
      work.showDeleteButton = true;
      return { jobs };
    });
  }

  hideDeleteButton(id) {
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let work = jobs.find((work) => work.id === id);
      work.showDeleteButton = false;
      return { jobs };
    });
  }

  deleteButton(id) {
    return (
      <button
        onClick={() => {
          this.deleteJob(id);
          this.props.workCountDown();
        }}
        className="deleteBtn btn"
      >
        DELETE
      </button>
    );
  }

  deleteJob(id) {
    this.setState({
      jobs: this.state.jobs.filter((task) => task.id !== id),
    });
  }

  addButton() {
    return (
      <button
        onClick={() => {
          this.addJob();
          this.props.workCountUp();
        }}
        className="addBtn btn"
      >
        ADD
      </button>
    );
  }

  handleAddingTaks() {
    this.setState({
      work: this.workTemplate(),
      jobs: this.state.jobs.concat(this.state.work),
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

  closeForm(e, id) {
    this.setState((prevState) => {
      let jobs = this.state.jobs;
      let job = jobs.find((job) => job.id === id);
      job.showForm = false;
      return { jobs };
    });
  }

  form(id) {
    return (
      <Draggable>
        <form
          className="work-form"
          autoComplete="off"
          onSubmit={(e) => this.handleEditJob(e, id)}
        >
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter job title"
            required
          />
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            placeholder="Enter company name"
            required
          />
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter location name"
            required
          />
          <label htmlFor="dates">Dates</label>
          <input
            id="dates"
            type="text"
            placeholder="JAN 2019 - DEC 2022"
            required
          />
          <label htmlFor="descwork">Description</label>
          <textarea
            id="descwork"
            type="text"
            placeholder="Enter short description of your duties..."
            required
          />
          <div className="btn-wrapper">
            <button type="submit" className="submitBtn btn">
              Submit
            </button>
            <button
              type="button"
              onClick={(e) => this.closeForm(e, id)}
              className="closeBtn btn"
            >
              Close
            </button>
          </div>
        </form>
      </Draggable>
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
        {this.props.workCount < 3 && this.addButton()}
      </div>
    );
  }
}

export default Work;
