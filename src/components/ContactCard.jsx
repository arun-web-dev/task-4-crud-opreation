import React from "react";
import userImage from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item contact-item">
      <div className="item-image">
        <img className="ui avatar image" src={userImage} alt="user-image" />
      </div>
      <div className="content item-header">
        <h2 className="header">{name}</h2>
        <h3>{email}</h3>
      </div>
      <div className="item-icon">
        <i
          onClick={() => props.clickHandler(id)}
          className="trash alternate outline icon"
          style={{ color: "red", marginLeft: "15px" }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
