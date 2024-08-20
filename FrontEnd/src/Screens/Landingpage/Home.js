import React from 'react';
import '../Landingpage/Styles/home.css';  
import LandingpageImage from "../../../../FrontEnd/src/Images/LandingpageImage.png";
import AboutUs from "../Landingpage/AboutUs"
import ContactUs from './ContactUs';
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
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className="buttons">
            <a href="#" className="signup">Login</a>
          </div>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero">
          <h2>Reveal Code Complexity</h2>
          <p>
            Improve code comprehension with AI-powered analysis and comprehensive documentation. Our solution minimizes the time spent on manual documentation and code reviews.
          </p>
          <div className="buttons">
            <a href="#" className="join">Join Now</a>
            <a href="#" className="learn">Learn More</a>
          </div>
        </div>
        <div className="img">
          <img src={LandingpageImage} alt="Landing Page" />
        </div>
      </section>

      {/* About Section */}
{/* <AboutUs/>
<ContactUs/> */}
    </div>
    <AboutUs/>
    <ContactUs/>
    </>
  );
}

export default Home;
