import React, { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skills: this.skillsTemplate(),
      checkedSkills: [],
      showButton: false,
      showForm: false,
      skillCount: 0,
      skill: { name: "", id: uniqid() },
    };

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.formSubmit = this.handleFormSubmit.bind(this);
    this.addSkill = this.handleCheckboxClick.bind(this);
    this.handleCustomSkillChange = this.handleCustomSkillChange.bind(this);
    this.handleCustomSkillAdd = this.handleCustomSkillAdd.bind(this);
  }

  skillsTemplate() {
    return [
      { id: uniqid(), isChecked: false, name: "Javascript" },
      { id: uniqid(), isChecked: false, name: "React" },
      { id: uniqid(), isChecked: false, name: "Git" },
      { id: uniqid(), isChecked: false, name: "NodeJS" },
      { id: uniqid(), isChecked: false, name: "NextJS" },
      { id: uniqid(), isChecked: false, name: "Solidity" },
      { id: uniqid(), isChecked: false, name: "Vue" },
      { id: uniqid(), isChecked: false, name: "Angular" },
      { id: uniqid(), isChecked: false, name: "ExpressJS" },
      { id: uniqid(), isChecked: false, name: "Django and Flask" },
      { id: uniqid(), isChecked: false, name: "MongoDB" },
      { id: uniqid(), isChecked: false, name: "Web development" },
      { id: uniqid(), isChecked: false, name: "Problem solving" },
      { id: uniqid(), isChecked: false, name: "Curiosity" },
      { id: uniqid(), isChecked: false, name: "Adaptability" },
      { id: uniqid(), isChecked: false, name: "Time management" },
      { id: uniqid(), isChecked: false, name: "Accountability" },
      { id: uniqid(), isChecked: false, name: "Teamwork" },
      { id: uniqid(), isChecked: false, name: "Communication" },
    ];
  }

  showButton() {
    this.setState({
      showButton: true,
    });
  }

  hideButton() {
    this.setState({
      showButton: false,
    });
  }

  button() {
    return (
      <button onClick={this.showForm} className="editBtn btn">
        EDIT
      </button>
    );
  }

  skillCountUp() {
    this.setState({
      skillCount: this.state.skillCount + 1,
    });
  }

  skillCountDown() {
    this.setState({
      skillCount: this.state.skillCount - 1,
    });
  }

  showForm() {
    this.setState({
      showForm: true,
    });
  }

  skillsForm() {
    return (
      <form className="skill-form" autoComplete="off">
        <span>Skills - max 6</span>
        <div className="skill-form-wrap">
          {this.state.skills.map((skill, index) => {
            return (
              <div key={skill.id} className="skill-choice-container">
                <label>{skill.name}</label>
                <input
                  onClick={(e) => this.addSkill(e, skill)}
                  type="checkbox"
                />
              </div>
            );
          })}
        </div>
        <div className="custom-skill">
          <label htmlFor="custom-text">Custom skill</label>
          <input
            placeholder="Enter skill name..."
            id="custom-text"
            type="text"
            onChange={(e) => this.handleCustomSkillChange(e)}
          />
          <button onClick={(e) => this.handleCustomSkillAdd(e)} className="btn">
            ADD
          </button>
        </div>
        <div className="btn-wrapper">
          <button
            type="submit"
            className="submitBtn btn"
            onClick={(e) => this.formSubmit(e)}
          >
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
    );
  }

  handleCheckboxClick(e, obj) {
    let task = this.state.checkedSkills.find((skill) => skill === obj);
    console.log(this.state.skillCount);
    if (!task && this.state.skillCount < 6) {
      this.setState({
        checkedSkills: this.state.checkedSkills.concat(obj),
      });
      this.skillCountUp();
    } else if (task && this.state.skillCount <= 6) {
      this.setState({
        checkedSkills: this.state.checkedSkills.filter((item) => item !== obj),
      });
      this.skillCountDown();
    } else {
      e.preventDefault();
      return;
    }
  }

  handleCustomSkillChange(e) {
    this.setState((prevState) => {
      let skill = this.state.skill;
      skill.name = e.target.value;
      return { skill };
    });
  }

  handleCustomSkillAdd(e) {
    e.preventDefault();
    if (this.state.skillCount < 6) {
      this.setState({
        checkedSkills: this.state.checkedSkills.concat(this.state.skill),
        skill: { name: "", id: uniqid() },
      });
      return this.state.checkedSkills;
    } else return;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      showForm: false,
    });
  }

  render() {
    return (
      <div
        className="skills-container"
        onMouseEnter={this.showButton}
        onMouseLeave={this.hideButton}
      >
        {this.state.showButton && this.button()}
        {this.state.showForm && this.skillsForm()}
        <div className="skills-wrapper">
          <div className="skills-header">
            SKILLS
            <div className="skills-divider"></div>
          </div>
          <div className="skills-content">
            {this.state.checkedSkills.length === 0
              ? this.state.skills.map((skill, index) => {
                  if (index < 6)
                    return <span key={uniqid()}>{skill.name}</span>;
                })
              : this.state.checkedSkills.map((skill, index) => {
                  return <span key={uniqid()}>{skill.name}</span>;
                })}
          </div>

          {/* <div className="skills-text">{description.text}</div> */}
        </div>
      </div>
    );
  }
}

export default Skills;
