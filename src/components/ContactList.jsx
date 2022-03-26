import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div
      className="ui celled list contact-list-container"
      style={{ marginTop: "80px" }}
    >
      <h2>
        Contacts
        <Link to="/add">
          <button className="ui button right add-contact-btn">
            Add Contact
          </button>
        </Link>
      </h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
