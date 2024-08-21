import React from 'react';
import ContactImage from '../../../../FrontEnd/src/Images/ContactImage.png'; 

const ContactUs = () => {
  const outerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #175d69 23%, #330c43 95%)',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    background: 'linear-gradient(90deg, #007BFF 50%, #0056b3 50%)',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
  };

  const contentContainerStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
  };

  const imageStyle = {
    flex: '0 0 50%', // Takes up 50% of the width
    backgroundImage: `url(${ContactImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    borderRadius: '8px',
    marginRight: '20px',
 
  };

  const formContainerStyle = {
    flex: '0 0 50%', // Takes up 50% of the width
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={outerContainerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <div style={contentContainerStyle}>
        <div style={imageStyle}></div>
        <div style={formContainerStyle}>
          <form>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <textarea placeholder="Message" style={{ ...inputStyle, height: '120px' }} />
            <button type="submit" style={buttonStyle}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


