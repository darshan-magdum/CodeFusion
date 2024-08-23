import React from 'react';
import '../../Screens/Landingpage/Styles/Contact.css'; 
import ContactImage from '../../../../FrontEnd/src/Images/ContactImage.png'; 

const ContactUs = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading text-center">
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <br />incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="title">
              <h3>Contact Detail</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
            <div className="content">
              {/* Info-1 */}
              <div className="info">
                <i className="fas fa-mobile-alt"></i>
                <h4>
                  PHONE :<br />
                  <span>+12457836913 , +12457836913</span>
                </h4>
              </div>
              {/* Info-2 */}
              <div className="info">
                <i className="far fa-envelope"></i>
                <h4>
                  EMAIL :<br />
                  <span>example@info.com</span>
                </h4>
              </div>
              {/* Info-3 */}
              <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <h4>
                  ADDRESS :<br />
                  <span>6743 last street, Abcd, Xyz</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-7">
          <form>
          <div className="form-group">
      <input type="text" className="form-control" placeholder="Name" />
    </div>
    <div className="form-group">
      <input type="email" className="form-control" placeholder="Email" />
    </div>
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Subject" />
  </div>
  <div className="form-group">
    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
  </div>
  <button className="btn btn-block" type="submit">Send Now!</button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
