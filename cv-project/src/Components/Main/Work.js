import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

const Work = (props) => {
  const [work, setWork] = useState([]);
  const workCount = props.workCount;
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < workCount; i++) {
      arr.push({
        title: "Senior Manager",
        company: "YOUR Company",
        location: "Paris - France",
        dates: "JAN 2020 - DEC 2023",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste, ex official!",
        showButton: false,
        showForm: false,
        showDeleteButton: false,
      });
    }
    setWork(arr);
  }, [workCount]);

  const showEditBtn = (index) => {
    const updatedWork = [...work];
    updatedWork[index].showButton = true;
    setWork(updatedWork);
  };

  const hideEditBtn = (index) => {
    const updatedWork = [...work];
    updatedWork[index].showButton = false;
    setWork(updatedWork);
  };

  const showDeleteButton = (index) => {
    const updatedWork = [...work];
    updatedWork[index].showDeleteButton = true;
    setWork(updatedWork);
  };

  const hideDeleteButton = (index) => {
    const updatedWork = [...work];
    updatedWork[index].showDeleteButton = false;
    setWork(updatedWork);
  };

  const showForm = (index) => {
    console.log(work);
    const updatedWork = [...work];
    updatedWork[index].showForm = true;
    setWork(updatedWork);
  };

  const hideForm = (index) => {
    const updatedWork = [...work];
    updatedWork[index].showForm = false;
    setWork(updatedWork);
  };

  const displayEditButton = (index) => {
    return (
      <button className="editBtn btn" onClick={() => showForm(index)}>
        EDIT
      </button>
    );
  };

  const displayDeleteButton = (index) => {
    return (
      <button
        onClick={() => {
          deleteJob(index);
          props.workCountDown();
        }}
        className="deleteBtn btn"
      >
        DELETE
      </button>
    );
  };

  const displayAddButton = () => {
    return (
      <button
        onClick={() => {
          props.workCountUp();
        }}
        className="addBtn btn"
      >
        ADD
      </button>
    );
  };

  const displayForm = (index) => {
    return (
      <Draggable>
        <form className="work-form" autoComplete="off" onSubmit={hideForm}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter job title"
            required
            onChange={(e) => handleTitleChange(e, index)}
          />
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            placeholder="Enter company name"
            required
            onChange={(e) => handleCompanyChange(e, index)}
          />
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter location name"
            required
            onChange={(e) => handleLocationChange(e, index)}
          />
          <label htmlFor="dates">Dates</label>
          <input
            id="dates"
            type="text"
            placeholder="JAN 2019 - DEC 2022"
            required
            onChange={(e) => handleDatesChange(e, index)}
          />
          <label htmlFor="descwork">Description</label>
          <textarea
            id="descwork"
            type="text"
            placeholder="Enter short description of your duties..."
            required
            onChange={(e) => handleWorkDescriptionChange(e, index)}
          />
          <div className="btn-wrapper">
            <button type="submit" className="submitBtn btn">
              Submit
            </button>
            <button
              type="button"
              onClick={() => hideForm(index)}
              className="closeBtn btn"
            >
              Close
            </button>
          </div>
        </form>
      </Draggable>
    );
  };

  const handleTitleChange = (e, index) => {
    const updatedWork = [...work];
    updatedWork[index].title = e.target.value;
    setWork(updatedWork);
  };

  const handleCompanyChange = (e, index) => {
    const updatedWork = [...work];
    updatedWork[index].company = e.target.value;
    setWork(updatedWork);
  };

  const handleLocationChange = (e, index) => {
    const updatedWork = [...work];
    updatedWork[index].location = e.target.value;
    setWork(updatedWork);
  };

  const handleDatesChange = (e, index) => {
    const updatedWork = [...work];
    updatedWork[index].dates = e.target.value;
    setWork(updatedWork);
  };

  const handleWorkDescriptionChange = (e, index) => {
    const updatedWork = [...work];
    updatedWork[index].description = e.target.value;
    setWork(updatedWork);
  };

  const deleteJob = (index) => {
    const updatedWork = work;
    updatedWork.splice(index, 1);
    setWork(updatedWork);
  };

  return (
    <div className="work-container">
      <div className="work-wrapper">
        <div className="work-header">
          WORK EXPERIENCE
          <div className="work-divider"></div>
        </div>
        {work.map((job, index) => {
          return (
            <div
              className="work-content-wrapper"
              key={index}
              onMouseEnter={() => {
                showEditBtn(index);
                showDeleteButton(index);
              }}
              onMouseLeave={() => {
                hideEditBtn(index);
                hideDeleteButton(index);
              }}
            >
              {work[index].showButton && displayEditButton(index)}
              {work[index].showForm && displayForm(index)}
              {work[index].showDeleteButton && displayDeleteButton(index)}
              <div className="work-content">
                <div className="work-info">
                  <div className="work-title">{work[index].title}</div>
                  <span className="work-span">
                    {work[index].company}, {work[index].location}
                  </span>
                </div>
                <span className="work-dates">{work[index].dates}</span>
              </div>
              <div className="work-text">{work[index].description}</div>
            </div>
          );
        })}
      </div>
      {props.workCount < 3 && displayAddButton()}
    </div>
  );
};

export default Work;
