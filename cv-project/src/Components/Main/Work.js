import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import uniqid from "uniqid";

const Work = (props) => {
  const [work, setWork] = useState([]);
  const workCount = props.workCount;
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < workCount; i++) {
      arr.push(workTemplate());
    }
    setWork(arr);
    // eslint-disable-next-line
  }, []);

  const workTemplate = () => {
    return {
      title: "Senior Manager",
      company: "YOUR Company",
      location: "Paris - France",
      dates: "JAN 2020 - DEC 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste, ex official!",
      showButton: false,
      showForm: false,
      showDeleteButton: false,
      id: uniqid(),
    };
  };

  const findElementIndex = (id) => {
    return work.findIndex((element) => element.id === id);
  };

  const showEditBtn = (id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].showButton = true;
    setWork(updatedWork);
  };

  const hideEditBtn = (id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].showButton = false;
    setWork(updatedWork);
  };

  const showDeleteButton = (id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].showDeleteButton = true;
    setWork(updatedWork);
  };

  const hideDeleteButton = (id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].showDeleteButton = false;
    setWork(updatedWork);
  };

  const showForm = (id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].showForm = true;
    setWork(updatedWork);
  };

  const hideForm = (id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].showForm = false;
    setWork(updatedWork);
  };

  const displayEditButton = (id) => {
    return (
      <button className="editBtn btn" onClick={() => showForm(id)}>
        EDIT
      </button>
    );
  };

  const displayDeleteButton = (id) => {
    return (
      <button
        onClick={() => {
          deleteJob(id);
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
          handleAddingWork();
        }}
        className="addBtn btn"
      >
        ADD
      </button>
    );
  };

  const displayForm = (id) => {
    return (
      <Draggable>
        <form
          className="work-form"
          autoComplete="off"
          onSubmit={() => hideForm(id)}
        >
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter job title"
            required
            onChange={(e) => handleTitleChange(e, id)}
          />
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            placeholder="Enter company name"
            required
            onChange={(e) => handleCompanyChange(e, id)}
          />
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter location name"
            required
            onChange={(e) => handleLocationChange(e, id)}
          />
          <label htmlFor="dates">Dates</label>
          <input
            id="dates"
            type="text"
            placeholder="JAN 2019 - DEC 2022"
            required
            onChange={(e) => handleDatesChange(e, id)}
          />
          <label htmlFor="descwork">Description</label>
          <textarea
            id="descwork"
            type="text"
            placeholder="Enter short description of your duties..."
            required
            onChange={(e) => handleWorkDescriptionChange(e, id)}
          />
          <div className="btn-wrapper">
            <button type="submit" className="submitBtn btn">
              Submit
            </button>
            <button
              type="button"
              onClick={() => hideForm(id)}
              className="closeBtn btn"
            >
              Close
            </button>
          </div>
        </form>
      </Draggable>
    );
  };

  const handleTitleChange = (e, id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].title = e.target.value;
    updatedWork[index].modified = true;
    setWork(updatedWork);
  };

  const handleCompanyChange = (e, id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].company = e.target.value;
    updatedWork[index].modified = true;
    setWork(updatedWork);
  };

  const handleLocationChange = (e, id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].location = e.target.value;
    updatedWork[index].modified = true;
    setWork(updatedWork);
  };

  const handleDatesChange = (e, id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].dates = e.target.value;
    updatedWork[index].modified = true;
    setWork(updatedWork);
  };

  const handleWorkDescriptionChange = (e, id) => {
    let index = findElementIndex(id);
    const updatedWork = [...work];
    updatedWork[index].description = e.target.value;
    updatedWork[index].modified = true;
    setWork(updatedWork);
  };

  const deleteJob = (id) => {
    let index = findElementIndex(id);
    console.log(index);
    const updatedWork = work;
    updatedWork.splice(index, 1);
    setWork(updatedWork);
  };

  const handleAddingWork = () => {
    const workArray = [...work];
    workArray.push(workTemplate());
    setWork(workArray);
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
              key={job.id}
              onMouseEnter={() => {
                showEditBtn(job.id);
                showDeleteButton(job.id);
              }}
              onMouseLeave={() => {
                hideEditBtn(job.id);
                hideDeleteButton(job.id);
              }}
            >
              {work[findElementIndex(job.id)].showButton &&
                displayEditButton(job.id)}
              {work[findElementIndex(job.id)].showForm && displayForm(job.id)}
              {work[findElementIndex(job.id)].showDeleteButton &&
                displayDeleteButton(job.id)}
              <div className="work-content">
                <div className="work-info">
                  <div className="work-title">
                    {work[findElementIndex(job.id)].title}
                  </div>
                  <span className="work-span">
                    {work[findElementIndex(job.id)].company},{" "}
                    {work[findElementIndex(job.id)].location}
                  </span>
                </div>
                <span className="work-dates">
                  {work[findElementIndex(job.id)].dates}
                </span>
              </div>
              <div className="work-text">
                {work[findElementIndex(job.id)].description}
              </div>
            </div>
          );
        })}
      </div>
      {props.workCount < 3 && displayAddButton()}
    </div>
  );
};

export default Work;
