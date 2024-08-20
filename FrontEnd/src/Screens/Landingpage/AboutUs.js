

import React from 'react';
import '../Landingpage/Styles/about.css';
import About from "../../../../FrontEnd/src/Images/About.jpg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src={About} className="pic" alt="About Us" />
        <div className="text">
          <h2>About Us</h2>
          <h5>
            Front-end Developer & <span>Designer</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            natus ad sed harum itaque ullam enim quas, veniam accusantium, quia
            animi id eos adipisci iusto molestias asperiores explicabo cum vero
            atque amet corporis! Soluta illum facere consequuntur magni. Ullam
            dolorem repudiandae cumque voluptate consequatur consectetur, eos
            provident necessitatibus reiciendis corrupti!
          </p>
          <div className="data">
            <a href="#" className="hire">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
