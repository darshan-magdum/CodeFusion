

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
          
          <p>
          At Fusion AI, we’re committed to transforming the way developers interact with their code. Our innovative platform leverages cutting-edge AI to streamline code management and documentation, ensuring you spend less time on administrative tasks and more time building exceptional software.
        
          </p>
          <br></br>
          <p>
          We offers a suite of advanced features, including intelligent code insights, customizable query capabilities.
 Fusion AI is designed to enhance your workflow and provide deeper understanding of your codebase, helping you achieve your coding goals with greater efficiency.
 </p>
        <br></br>
        <p>
        Upload your code folder to get started. Our advanced AI will analyze all the files within, generating comprehensive documentation with detailed insights for each file. You can then view this documentation to understand your code better, and use the custom prompt feature.
        </p>
      
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
