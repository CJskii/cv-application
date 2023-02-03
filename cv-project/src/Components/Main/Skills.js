import React, { Component, useEffect, useState } from "react";
import uniqid from "uniqid";
import Draggable from "react-draggable";

const Skills = (props) => {
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [editBtn, setEditBtn] = useState(false);
  const [form, setShowForm] = useState(false);
  const [skillCount, setSkillCount] = useState(0);

  useEffect(() => {
    const arr = [
      { isChecked: false, name: "Javascript" },
      { isChecked: false, name: "React" },
      { isChecked: false, name: "Git" },
      { isChecked: false, name: "NodeJS" },
      { isChecked: false, name: "NextJS" },
      { isChecked: false, name: "Solidity" },
      { isChecked: false, name: "Vue" },
      { isChecked: false, name: "Angular" },
      { isChecked: false, name: "ExpressJS" },
      { isChecked: false, name: "Django and Flask" },
      { isChecked: false, name: "MongoDB" },
      { isChecked: false, name: "Web development" },
      { isChecked: false, name: "Problem solving" },
      { isChecked: false, name: "Curiosity" },
      { isChecked: false, name: "Adaptability" },
      { isChecked: false, name: "Time management" },
      { isChecked: false, name: "Accountability" },
      { isChecked: false, name: "Teamwork" },
      { isChecked: false, name: "Communication" },
    ];
    setSkills(arr);
  }, []);

  const showEditBtn = () => {
    setEditBtn(true);
  };

  const hideEditBtn = () => {
    setEditBtn(false);
  };

  const showForm = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  const displayEditButton = (index) => {
    return (
      <button className="editBtn btn" onClick={showForm}>
        EDIT
      </button>
    );
  };

  const handleSelectingSkills = (e, skill) => {
    const updatedArray = selectedSkills;
    const isInArray = updatedArray.find(
      (element) => element.name === skill.name
    );
    console.log(isInArray);
    if (skillCount === 6 && !isInArray) return e.preventDefault();
    if (!skill.isChecked && skillCount < 6) {
      skill.isChecked = true;
      updatedArray.push(skill);
      setSkillCount(skillCount + 1);
      setSelectedSkills(updatedArray);
    } else if (isInArray) {
      const index = updatedArray.findIndex(
        (element) => element.name === skill.name
      );
      skill.isChecked = false;
      updatedArray.splice(index, 1);
      setSkillCount(skillCount - 1);
      setSelectedSkills(updatedArray);
    }
  };

  const displayForm = () => {
    return (
      <Draggable>
        <form className="skill-form" autoComplete="off">
          <span>Skills - max 6</span>
          <div className="skill-form-wrap">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="skill-choice-container">
                  <label>{skill.name}</label>
                  <input
                    // onClick={(e) => this.addSkill(e, skill)}
                    onClick={(e) => handleSelectingSkills(e, skill)}
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
              // onChange={(e) => this.handleCustomSkillChange(e)}
            />
            <button
              // onClick={(e) => this.handleCustomSkillAdd(e)}
              className="btn"
            >
              ADD
            </button>
          </div>
          <div className="btn-wrapper">
            <button type="submit" className="submitBtn btn" onClick={hideForm}>
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
      className="skills-container"
      onMouseEnter={showEditBtn}
      onMouseLeave={hideEditBtn}
    >
      {editBtn && displayEditButton()}
      {form && displayForm()}
      <div className="skills-wrapper">
        <div className="skills-header">
          SKILLS
          <div className="skills-divider"></div>
        </div>
        <div className="skills-content">
          {selectedSkills.length === 0
            ? skills.map((skill, index) => {
                if (index < 6) return <span key={index}>{skill.name}</span>;
              })
            : selectedSkills.map((skill, index) => {
                return <span key={index}>{skill.name}</span>;
              })}
        </div>

        {/* <div className="skills-text">{description.text}</div> */}
      </div>
    </div>
  );
};
export default Skills;
