import React from "react";
import "./about.css";
import about from "../../resources/about.jpeg";

const About = () => {
  return (
    <div className="about-box">
      <section className="header-and-img">
        <h1 className="about-header">Digital Unicorn.</h1>
        <img id="about-img" src={about} alt="portrait" />
      </section>

      <section className="about-me">
  <p>
    Hey, my name is Kate and I'm a Full-Stack developer + Digital Designer
    from PDX. I use the PERN stack to create visually aesthetic and sleek 
    web apps with user-functionality in mind.
  </p>
  <p>
    Curious. Honest. Passionate. Working in a variety of different
    industries has amplified my curiosity for meeting new people, learning
    new technologies, appreciating diverse cultures, and traveling to new
    lands. Most recently, my curiosity has lead me to fullstack
    development. 
    </p>
    <p>
    My tech stack includes JavaScript, React, Redux, Node.js,
    Express.js, PostgreSQL, HTML5, CSS3, Bootstrap, & Sass. For DevOps I use GitHub, Git,
    SourceTree, Postman, & Visual Studio Code.
  </p>
</section>
    </div>
  );
};

export default About;
