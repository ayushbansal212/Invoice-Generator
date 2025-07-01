import React, { useContext, useState } from "react";
import "../CSS/Contact.css";
import { InvoiceGeneratorContext } from "./Context.js";

export default function Contact({ onSubmit }) {
  const{isdarktheme}=useContext(InvoiceGeneratorContext)
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(contact);
  };

  return (
    <div className="contactwrapper">
      <form className={isdarktheme?"darkcontactnav contact-form":"contact-form" }onSubmit={handleSubmit}>
        <h3>Contact</h3>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Message:
          <textarea
            name="address"
            value={contact.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
