import React, { useState } from "react";
import Draggable from "react-draggable";

const Profile = () => {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex official!"
  );
  const [editBtn, setEditBtn] = useState(false);
  const [form, setShowForm] = useState(false);

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

  const displayEditButton = () => {
    return (
      <button className="editBtn btn" onClick={showForm}>
        EDIT
      </button>
    );
  };

  const displayForm = () => {
    return (
      <Draggable>
        <form className="profile-form" autoComplete="off" onSubmit={hideForm}>
          <label htmlFor="text-area">Your profile description</label>
          <textarea
            placeholder="Type short introduction about yourself..."
            id="text-area"
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
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
      className="profile-container"
      onMouseEnter={showEditBtn}
      onMouseLeave={hideEditBtn}
    >
      {editBtn && displayEditButton()}

      <div className="profile-wrapper">
        <div className="profile-header">
          PROFILE
          <div className="profile-divider"></div>
        </div>

        <div className="profile-text">{description}</div>
      </div>
      {form && displayForm()}
    </div>
  );
};

export default Profile;
