import React from "react";
import "./projects.css";

import booking from "../../resources/astraeabooking.png";
import moon from "../../resources/astraeamoon.png";

import moneta1 from "../../resources/moneta1.png";
import moneta2 from "../../resources/moneta2.png";

import zFairs1 from "../../resources/zFairs1.png";
import zFairs2 from "../../resources/zFairs2.png";

import doctogether1 from "../../resources/doctogether1.png";
import doctogether2 from "../../resources/doctogether2.png";

import showcaseabout from "../../resources/showcaseabout.png";
import showcaseprojects from "../../resources/showcaseprojects.png";

import dh_light_landing from "../../resources/dh_light_landing.jpg";
import dh_light_contact from "../../resources/dh_light_contact.jpg";

import BT_Landing from "../../resources/BT_Landing.jpg";
import BT_Order from "../../resources/BT_Order.jpg";

import BC_SLC from "../../resources/BC_SLC.png";
import BC_history from "../../resources/BC_history.png";

const Projects = () => {
  return (
    <div className="projects-box">


      <section className="project-section">
        <p>001</p>
        <h1>zFairs</h1>
        <p>Professional Experience - Developer & Designer</p>
        <a href="https://www.zfairs.com/">
          <img
            id="preview-img"
            src={zFairs1}
            alt="screenshot of zFairs landing section"
          />
        </a>

        <a href="https://www.zfairs.com/">
          <img id="preview-img" src={zFairs2} alt="screenshot of zFairs quiz" />
        </a>
      </section>


      <section className="project-section">
        <p>002</p>
        <h1>DocTogether - Work in Progress</h1>
        <p>Professional Experience - Developer & Designer</p>
        <a href="https://www.doctogether.com/">
          <img
            id="preview-img"
            src={doctogether1}
            alt="screenshot of doctogether landing section"
          />
        </a>

        <a href="https://www.doctogether.com/">
          <img
            id="preview-img"
            src={doctogether2}
            alt="screenshot of doctogether signup page"
          />
        </a>
      </section>


      <section className="project-section">
        <p>003</p>
        <h1>ASTRAEA</h1>
        <p>Solo Project - Developer & Designer</p>
        {/* <p>user: guest | password: guest</p> */}
        {/* <a href="http://54.185.198.52/#/"> */}
        <img
          id="preview-img"
          src={moon}
          alt="screenshot of astraea landing page"
        />
        {/* </a> */}

        {/* <a href="http://54.185.198.52/#/"> */}
        <img
          id="preview-img"
          src={booking}
          alt="screenshot of astraea booking page"
        />
        {/* </a> */}
      </section>

      <section className="project-section">
        <p>004</p>
        <h1>MONETA</h1>
        <p>Team Project - Developer & Designer</p>
        {/* <p>user: guest | password: guest</p> */}
        {/* <a href="http://moneta.guru/#/"> */}
        <img
          id="preview-img"
          src={moneta1}
          alt="screenshot of moneta login page"
        />
        {/* </a> */}

        {/* <a href="http://moneta.guru/#/"> */}
        <img
          id="preview-img"
          src={moneta2}
          alt="screenshot of moneta edit products page"
        />
        {/* </a> */}
      </section>

      <section className="project-section">
        <p>005</p>
        <h1>BOOK CLUB</h1>
        <p>Personal Project - Developer & Designer</p>
        <a href="https://read-slc.web.app/">
          <img
            id="preview-img"
            src={BC_SLC}
            alt="screenshot of book club landing section"
          />
        </a>

        <a href="https://read-slc.web.app/">
          <img
            id="preview-img"
            src={BC_history}
            alt="screenshot of book club history section"
          />
        </a>
      </section>


      <section className="project-section">
        <p>006</p>
        <h1>SPILT MILK</h1>
        <p>Personal Project - Developer & Designer</p>

        <a href="https://spiltmilk-portfolio.firebaseapp.com/">
          <img
            id="preview-img"
            src={showcaseabout}
            alt="screenshot of spilt milk landing section"
          />
        </a>

        <a href="https://spiltmilk-portfolio.firebaseapp.com/">
          <img
            id="preview-img"
            src={showcaseprojects}
            alt="screenshot of spilt milk projects section"
          />
        </a>
      </section>

      <section className="project-section">
        <p>007</p>
        <h1>DIGITAL HARBINGER - Work in Progress</h1>
        <p>Contract Project - Developer & Designer</p>

        {/* <a href=""> */}
        <img
          id="preview-img"
          src={dh_light_landing}
          alt="screenshot of digital harbinger landing section"
        />
        {/* </a> */}

        {/* <a href=""> */}
        <img
          id="preview-img"
          src={dh_light_contact}
          alt="screenshot of digital harbinger contact section"
        />
        {/* </a> */}
      </section>

      <section className="project-section">
        <p>008</p>
        <h1>BUBBLE TEA SHOP - Work in Progress</h1>
        <p>Contract Project - Developer & Designer</p>
        <a href="https://meo-tea.web.app/">
          <img
            id="preview-img-vert"
            src={BT_Landing}
            alt="screenshot of bubble tea landing section"
          />
        </a>

        <a href="https://meo-tea.web.app/">
          <img
            id="preview-img-vert"
            src={BT_Order}
            alt="screenshot of bubble tea order section"
          />
        </a>
      </section>

    </div>
  );
};

export default Projects;
