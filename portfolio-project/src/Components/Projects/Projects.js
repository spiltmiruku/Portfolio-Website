import React from "react";
import "./projects.css";

import booking from "../../resources/astraeabooking.png";
import moon from "../../resources/astraeamoon.png";

import auth from "../../resources/moneta_auth.jpg";
import payment from "../../resources/moneta_payment.jpg";

import showcaseabout from "../../resources/showcaseabout.png";
import showcaseprojects from "../../resources/showcaseprojects.png";

const Projects = () => {
  return (
    <div className="projects-box">
      <section className="project-section">
        <p>001</p>
        <h1>ASTRAEA</h1>
        <a href="http://54.185.198.52/#/">
          <img id="preview-img" src={moon} />
        </a>
        
        <a href="http://54.185.198.52/#/">
        <img id="preview-img" src={booking} />
        </a>

      </section>

      <section className="project-section">
        <p>002</p>
        <h1>MONETA</h1>
        <img id="preview-img" src={auth} />
        <img id="preview-img" src={payment} />
      </section>

      <section className="project-section">
        <p>003</p>
        <h1>SHOWCASE</h1>
        <a href='https://spiltmilk-portfolio.firebaseapp.com/'>
        <img id="preview-img" src={showcaseabout} />
        </a>

        <a href='https://spiltmilk-portfolio.firebaseapp.com/'>
        <img id="preview-img" src={showcaseprojects} />
        </a>

      </section>
    </div>
  );
};

export default Projects;
