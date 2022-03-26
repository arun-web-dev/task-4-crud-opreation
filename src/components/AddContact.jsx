import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.email) return;
    this.props.addContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
    });
  };
  render() {
    return (
      <div
        className="ui main  add-contact-container"
        style={{ marginTop: "80px" }}
      >
        <div className="add-contact-container-heading">
          <h2>Add Contact</h2>
        </div>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label className="form-label">Name</label>
            <input
              value={this.state.name}
              onChange={(e) =>
                this.setState({
                  name: e.target.value,
                })
              }
              type="text"
              name="name"
              placeholder="Name"
              // required
            />
          </div>
          <div className="field">
            <label className="form-label">Email</label>
            <input
              value={this.state.email}
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                })
              }
              type="text"
              name="email"
              placeholder="Email"
              // required
            />
          </div>

          <button className="ui button add-btn">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
