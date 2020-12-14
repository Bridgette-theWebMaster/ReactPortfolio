import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import email from "../Assets/email.png";
import "./Contact.css";

export default function Contact() {
  const [emailMessage, setEmailMessage] = useState({
    message: "",
    email: "",
    name: "",
  });
  const onChange = (e) =>
    setEmailMessage({ ...emailMessage, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message, email } = emailMessage;

    let templateParams = {
      sender_email: email,
      sender_name: name,
      subject: "Portfolio Email",
      message_html: message,
    };

    emailjs.send(
      "service_2tae5ui",
      "template_ovho66t",
      templateParams,
      "user_XQcC5o7fSwDsV73hzzI1a"
    );
    resetForm();
  };

  const resetForm = () => {
    setEmailMessage({
      message: "",
      email: "",
      name: "",
    });
  };

  return (
    <div className="ContactContainer">
      <h1>Contact</h1>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/bridgette-turner/"
      >
        <img src={linkedin} alt="linkedin" width="50px" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/bridgette-thewebmaster"
      >
        <img src={github} alt="github" width="50px" />
      </a>
      <a href="mailto:turner.bridgette@yahoo.com?subject=Developer%20inquirey.">
        <img src={email} alt="email" width="50px" />
      </a>
      <form onSubmit={handleSubmit} className="ContactForm">
        <input
          name="name"
          type="name"
          values={emailMessage.name}
          onChange={(e) => onChange(e)}
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          values={emailMessage.email}
          onChange={(e) => onChange(e)}
          placeholder="Email"
        />
        <textarea
          cols="25"
          rows="4"
          name="message"
          type="message"
          values={emailMessage.message}
          onChange={(e) => onChange(e)}
          placeholder="Write your email here"
        />
        <br />
        <button type="submit" className="Contactbtn">
          Connect with me
        </button>
      </form>
    </div>
  );
}
