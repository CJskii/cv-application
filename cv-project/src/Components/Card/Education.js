import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

const Education = () => {
  const [count, setCount] = useState("2");
  const [education, setEducation] = useState([]);

  const [editBtn, setEditBtn] = useState(false);
  const [form, setShowForm] = useState(false);

  useEffect(() => {
    let arr = [
      {
        title: "Master in Javascript",
        dates: "JAN 2019 - DEC 2022",
        university: "Oxford University - UK",
      },
    ];
    if (count == 2) {
      arr.push({
        title: "Master in CS",
        dates: "JAN 2015 - DEC 2018",
        university: "London University - UK",
      });
    }
    setEducation(arr);
  }, [count]);

  const showEditBtn = () => {
    console.log(education);
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

  const countClick = () => {
    setCount(count === 1 ? 2 : 1);
  };

  const displayEditButton = () => {
    return (
      <button className="editBtn btn" onClick={showForm}>
        EDIT
      </button>
    );
  };

  const handleTitleChange = (e, index) => {
    const updatedEdu = [...education];
    updatedEdu[index].title = e.target.value;
    setEducation(updatedEdu);
  };

  const handleDatesChange = (e, index) => {
    const updatedEdu = [...education];
    updatedEdu[index].dates = e.target.value;
    setEducation(updatedEdu);
  };

  const handleUniChange = (e, index) => {
    const updatedEdu = [...education];
    updatedEdu[index].university = e.target.value;
    setEducation(updatedEdu);
  };

  const displayForm = () => {
    return (
      <Draggable>
        <form className="education-form" autoComplete="off" onSubmit={hideForm}>
          {count === 1 ? (
            <i className="add" onClick={countClick}></i>
          ) : (
            <i className="remove" onClick={countClick}></i>
          )}

          {education.map((edu, index) => (
            <div className="edu-wrap" key={index}>
              <label htmlFor={`title-${index}`}>Degree</label>
              <input
                placeholder={edu.title}
                id={`title-${index}`}
                className={`title-form t${index + 1}`}
                type="text"
                required
                value={edu.title}
                onChange={(e) => handleTitleChange(e, index)}
              />
              <label htmlFor={`dates-${index}`}>Dates</label>
              <input
                placeholder={edu.dates}
                id={`dates-${index}`}
                className={`dates-form d${index + 1}`}
                type="text"
                required
                value={edu.dates}
                onChange={(e) => handleDatesChange(e, index)}
              />
              <label htmlFor={`uni-${index}`}>University/School</label>
              <input
                placeholder={edu.university}
                id={`uni-${index}`}
                className={`uni-form u${index + 1}`}
                type="text"
                required
                value={edu.university}
                onChange={(e) => handleUniChange(e, index)}
              />
            </div>
          ))}
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
      className="education-container"
      onMouseEnter={showEditBtn}
      onMouseLeave={hideEditBtn}
    >
      <div className="education-wrapper">
        <span className="card-header">EDUCATION</span>
        <div className="card-divider"></div>
        {education.map((edu, index) => (
          <div key={index}>
            <div className="education-title">{edu.title}</div>
            <div className="dates">{edu.dates}</div>
            <div className="uni">{edu.university}</div>
          </div>
        ))}

        {editBtn && displayEditButton()}
        {form && displayForm()}
      </div>
    </div>
  );
};

export default Education;
