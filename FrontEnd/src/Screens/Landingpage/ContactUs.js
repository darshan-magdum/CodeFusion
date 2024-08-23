import React from 'react';
import '../../Screens/Landingpage/Styles/Contact.css'; 
import ContactImage from '../../../../FrontEnd/src/Images/ContactImage.png'; 

const ContactUs = () => {
  return (
    <div className="outer-container">
      <h1 className="heading">Contact Us</h1>
      <div className="content-container">
        <div className="image" style={{ backgroundImage: `url(${ContactImage})` }}></div>
        <div className="form-container">
          <form>
            <input type="text" placeholder="Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <textarea placeholder="Message" className="input textarea" />
            <button type="submit" className="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
