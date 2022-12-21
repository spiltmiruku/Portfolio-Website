import React, { useEffect } from "react";

import "./contact.css";
const linkedin =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/linkedin.png";
const github =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/github.png";
const instagram =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/instagram.svg";

const Contact = () => {
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  });
  return (
    <div className="contact-box">
      {/* <div className="contact-inputs">
        <input className="sm-input" placeholder="name" type="text"></input>
        <input className="sm-input" placeholder="email" type="email"></input>
        <input className="lg-input" placeholder="message" type="text"></input>
        <div className="submit-info">SEND</div>
      </div> */}
      <div className="contact-methods">
        <div className="scrolling-text-box">
          <h1 className="scrolling-text">
            Connect with me on
            <span
              class="txt-rotate"
              data-period="2000"
              // data-rotate='[ " social media.", " LinkedIn.", " GitHub.", " Instagram."]'
              data-rotate='[ " LinkedIn."]'
            ></span>
          </h1>
        </div>
<div className='icons'>

      <a href="https://www.linkedin.com/in/kateqz/">
        <img src={linkedin} alt="LinkedIn" className="contact-icon" />
      </a>
      {/* <a href="https://github.com/spiltmiruku">
        <img src={github} alt="GitHub" className="contact-icon" />
      </a>
      <a href="https://www.instagram.com/spiltmiruku/">
        <img src={instagram} alt="Instagram" className="contact-icon" />
      </a> */}
      </div>
</div>
    </div>
  );
};

export default Contact;
