import React, { Component } from "react";
import "./contact.css";
const linkedin =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/linkedin.png";
const github =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/github.png";
const instagram =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/instagram.svg";

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="contact-inputs">
        <input className="sm-input" placeholder="name" type="text"></input>
        <input className="sm-input" placeholder="email" type="email"></input>
        <input className="lg-input" placeholder="message" type="text"></input>
        <div className="submit-info">SEND</div>
      </div>
      <div className="contact-methods">
        {/* <p>tel: 801-123-1234</p> */}
        {/* <p>email: email@email.com</p> */}
        <p>Current Residence: Salt Lake City, UT</p>
        <p>
          Contact form is currently under construction. In the meanwhile,
          connect with me on social media:
        </p>

        <a href="https://www.linkedin.com/in/kateqz/">
          <img src={linkedin} alt="LinkedIn" className="contact-icon" />
        </a>
        <a href="https://github.com/spiltmiruku">
          <img src={github} alt="GitHub" className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/spiltmiruku/">
          <img src={instagram} alt="Instagram" className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
