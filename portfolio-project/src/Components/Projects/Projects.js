import React from "react";
import "./projects.css";

import booking from "../../resources/astraeabooking.png";
import moon from "../../resources/astraeamoon.png";

// import auth from "../../resources/moneta_auth.jpg";
// import payment from "../../resources/moneta_payment.jpg";

import moneta1 from '../../resources/moneta1.png';
import moneta2 from '../../resources/moneta2.png';

import showcaseabout from "../../resources/showcaseabout.png";
import showcaseprojects from "../../resources/showcaseprojects.png";

const Projects = () => {
  return (
    <div className="projects-box">
      <section className="project-section">
        <p>001</p>
        <h1>ASTRAEA</h1>
        <p>user: guest | password: guest</p>
        <a href="http://54.185.198.52/#/">
          <img id="preview-img" src={moon} alt='screenshot of astraea landing page'/>
        </a>

        <a href="http://54.185.198.52/#/">
          <img id="preview-img" src={booking} alt='screenshot of astraea booking page'/>
        </a>
      </section>

      <section className="project-section">
        <p>002</p>
        <h1>MONETA</h1>
        <p>user: guest | password: guest</p>
        <a href="http://moneta.guru/#/">
          <img id="preview-img" src={moneta1} alt='screenshot of moneta login page'/>
        </a>

        <a href="http://moneta.guru/#/">
          <img id="preview-img" src={moneta2} alt='screenshot of moneta edit products page'/>
        </a>
      </section>

      <section className="project-section">
        <p>003</p>
        <h1>SPILT MILK</h1>
        <a href="https://spiltmilk-portfolio.firebaseapp.com/">
          <img id="preview-img" src={showcaseabout} alt='screenshot of spilt milk landing section'/>
        </a>

        <a href="https://spiltmilk-portfolio.firebaseapp.com/">
          <img id="preview-img" src={showcaseprojects} alt='screenshot of spilt milk projects section'/>
        </a>
      </section>
    </div>
  );
};

export default Projects;
