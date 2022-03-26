import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AddContact = (props) => {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
    console.log(navigate("/"));
  };

  return (
    <div
      className="ui main  add-contact-container"
      style={{ marginTop: "80px" }}
    >
      <div className="add-contact-container-heading">
        <h2>Add Contact</h2>
      </div>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label className="form-label">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="field">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <button className="ui button add-btn">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
