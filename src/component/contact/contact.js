import React, { useState } from "react";
import "./contact.css";
import Swal from "sweetalert2";

function Contact() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    formData.append("access_key", "224375c6-3c0f-4252-af50-aac20f83101c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        setInput({ fullName: "", email: "", address: "", message: "" }); // Reset input fields
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Network error. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="contact-display" id="contact">
        <div className="contact-box">
          <form onSubmit={onSubmit}>
            <h1>Contact Us</h1>
            <div className="contact-input">
              <label>Full Name</label>
              <input
                type="text"
                className="field"
                placeholder="Enter the Name"
                name="fullName"
                value={input.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input">
              <label>E-Mail Address</label>
              <input
                type="email"
                className="field"
                placeholder="Enter the E-Mail"
                name="email"
                value={input.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input">
              <label>Address</label>
              <input
                type="text"
                className="field"
                placeholder="Enter the Address"
                name="address"
                value={input.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input">
              <label>Your Message</label>
              <textarea
                rows="4"
                className="field mess"
                placeholder="Enter the Message"
                name="message"
                value={input.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="btn-styles" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
