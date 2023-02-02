import React, { useState } from "react";
import Name from "./Name";
import Underline from "./Underline";
import Title from "./Title";
import "./General.css";
import Draggable from "react-draggable";

const General = () => {
  const [name, setName] = useState("SATOSHI NAKAMOTO");
  const [title, setTitle] = useState("BITCOIN CREATOR");
  const [editBtn, setEditBtn] = useState(false);
  const [form, setShowForm] = useState(false);

  const showEditBtn = () => {
    setEditBtn(true);
  };

  const hideEditBtn = () => {
    setEditBtn(false);
  };

  const displayForm = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  const showEditButton = () => {
    return (
      <button className="editBtn btn" onClick={displayForm}>
        EDIT
      </button>
    );
  };

  const showForm = () => {
    return (
      <Draggable>
        <form className="name-form" autoComplete="off" onSubmit={hideForm}>
          <label htmlFor="name">Enter your name</label>
          <input
            placeholder="Satoshi Nakamoto"
            id="name"
            className="name-input"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
          <label htmlFor="title">Enter your title</label>
          <input
            placeholder="Bitcoin Creator"
            id="title"
            className="title-input"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
          />
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
      className="wrapper"
      onMouseEnter={showEditBtn}
      onMouseLeave={hideEditBtn}
    >
      <Name name={name} />
      <Underline />
      <Title title={title} />
      {editBtn && showEditButton()}
      {form && showForm()}
    </div>
  );
};
export default General;
