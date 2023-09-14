import React, { Component } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Result = () => {
  return (
    <div>
      <p className="showelement">
        {" "}
        Your message has been successfully sent. I will contact you shortly{" "}
      </p>
    </div>
  );
};

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();

    this.state = {
      result: false,
    };

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_befv5w8",
        "template_8s47jbj",
        this.form.current,
        "wkHN5EbQuP_Rj-sCE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    this.form.current.reset();
    this.setState({ result: true });

    setTimeout(() => {
      this.setState({ result: false });
    }, 5000);
  };

  render() {
    return (
      <div>
        <div className="contactmeinfo">
          <h1>Contact Me</h1>
          <p className="sub-title">Get in Touch</p>
          <div className="contact-container">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>Please fill up the form and submit your enquiry</p>
              <div className="icon-text">
                <div className="iconfe">
                  <FaPhoneAlt />
                </div>
                <span> +(61)-044-999-6465 </span>
              </div>
              <div className="icon-text">
                <i className="iconfe">
                  <GoMailRead />
                </i>
                <span> rikki.gautam18@gmail.com</span>
              </div>
              <div className="icon-text">
                <i className="iconfe">
                  <FaMapMarkerAlt />
                </i>
                <span> Lidcombe, NSW 2141</span>
              </div>
              <div className="social-media">
                <a
                  href="https://www.facebook.com/Ritcos"
                  target="_blank"
                  className="icon-circle"
                >
                  <i className="icon">
                    <BsFacebook />
                  </i>
                </a>
                <a
                  href="https://twitter.com/ritcusmatgau11"
                  target="_blank"
                  className="icon-circle"
                >
                  <i className="icon">
                    <BsTwitter />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/ritcus.matgau/?hl=en"
                  target="_blank"
                  className="icon-circle"
                >
                  <i className="icon">
                    <BsInstagram />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/rikki-gautam-500b0463/"
                  target="_blank"
                  className="icon-circle"
                >
                  <i className="icon">
                    <BsLinkedin />
                  </i>
                </a>
              </div>
            </div>

            <form ref={this.form} onSubmit={this.sendEmail}>
              <div className="col">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" required="true" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" required="true" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>E-Mail</label>
                  <input type="email" name="email" required="true" />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="number"
                    name="phone"
                    pattern="[0-9]+"
                    required="true"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Write your message:</label>
                  <textarea name="message" required="true"></textarea>
                </div>
              </div>
              <div className="col">
                <div className="submitbtn">
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>

          {this.state.result ? <Result /> : null}
        </div>

        <div className="map">
          <p className="find">Find me</p>
          <iframe
            className="googlemap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.824982363092!2d151.03866775100119!3d-33.86501847926992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bca0c3a79807%3A0xbc973674b050bf3a!2sLidcombe!5e0!3m2!1sen!2sau!4v1649588793581!5m2!1sen!2sau"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default ContactMe;
