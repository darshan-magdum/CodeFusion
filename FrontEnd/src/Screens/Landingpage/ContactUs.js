import React from 'react';

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
};

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div style={formStyle}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="4"
            style={{ ...inputStyle, resize: 'vertical' }}
            required
          ></textarea>
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
