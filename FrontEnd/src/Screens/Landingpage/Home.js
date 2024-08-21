import React from 'react';
import '../Landingpage/Styles/home.css';  
import LandingpageImage from "../../Images/ContactImage.png";
import AboutUs from "../Landingpage/AboutUs";
import ContactUs from './ContactUs';
import WorkFLow from './WorkFLow';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <header className="header">
          <nav className="navbar">
            <h2 className="logo">
              <a href="#">Fusion AI</a>
            </h2>
            <input type="checkbox" id="menu-toggle" className="menuToggle" />
            <label htmlFor="menu-toggle" id="hamburger-btn" className="hamburgerBtn">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </label>
            <ul className="links">
              <li><a href="#hero-section">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#workflow">How it Works</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
            <div className="buttons">
              <Link to="/Login" className="signup">Login</Link>
            </div>
          </nav>
        </header>
        <section id="hero-section" className="hero-section">
          <div className="hero">
            <h2>Reveal Code Complexity</h2>
            <p>
              Improve code comprehension with AI-powered analysis and comprehensive documentation. Our solution minimizes the time spent on manual documentation and code reviews.
            </p>
            <div className="buttons">
           
              <Link to="/signup" className="join">Join Now</Link>
              
            </div>
          </div>
          <div className="img">
            <img src={LandingpageImage} alt="Landing Page" />
          </div>
        </section>

        <section id="about-us">
          <AboutUs />
        </section>
        <br></br>  <br></br>       <br></br>  <br></br>
        <section id="workflow">
          <WorkFLow />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </div>
    </>
  );
}

export default Home;
