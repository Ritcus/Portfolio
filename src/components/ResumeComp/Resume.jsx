import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ResumeBoxes.css";
import { Floating } from "./Floating";

export default class Resume extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  render() {
    return (
      <div>
        <Floating />

        <div className="grids" id="secondSection">
          <div data-aos="fade-up" className="boxes">
            <h1 className="heading">MY OBJECTIVE:</h1>
            <div className="firstnSecond">
              Methodical and detail-oriented IT graduate, always keen to learn
              to advance my career in the SOFTWARE DEVELOPMENT field.
            </div>
            <br />
          </div>
          <div data-aos="fade-up" className="boxes">
            <h1 className="heading">SKILLS and ATTRIBUTES:</h1>
            <span className="firstnSecond">
              • Ability to conceptualize problems and develop well-reasoned and
              logical viewpoints. <br />
              <br />
              • Fostered communication and teamwork skills through teaching,
              volunteer and extra-curricular environments. <br />
              <br />
              • Clarity in written expression demonstrated in academic work and
              report writing. <br />
              <br />
              • Impeccable problem-solving skills.
              <br />
              <br />
              • Eager to learn more skills and focused on continuous
              development.
              <br />
            </span>
          </div>

          <div data-aos="fade-left" className="boxes">
            <h1 className="heading">EDUCATION:</h1>
            • MASTER OF INFORMATION TECHNOLOGY -2021 <br />
            (UNIVERSITY OF CANBERRA, CANBERRA)
            <br />
            <br />
            • PROFESSIONAL YEAR PROGRAM – INFORMATION TECHNOLOGY -2019 <br />{" "}
            (QUEENSLAND INTERNATIONAL BUSINESS ACADEMY)
            <br />
            <br />
            • BACHELOR OF INFORMATION TECHNOLOGY -2018 <br />
            (AUSTRALIAN CATHOLIC UNIVERSITY, NORTH SYDNEY NSW)
            <br />
            <br />
            • DIPLOMA OF SOFTWARE DEVELOPMENT -2015 <br />
            (HOLMES INSTITUTE, SYDNEY NSW)
          </div>
          <div data-aos="fade-right" className="boxes">
            <h1 className="heading">ACADEMIC PROJECTS:</h1>
            • Research Project Management of Mobile Application for Homeless
            people in ACT. <br />
            <br />
            • Build a fully responsive Merchandise (Online soccer accessories
            store) website using PHP, CSS, and HTML.
            <br />
            <br />• Build a student sign up form using VB.Net.
          </div>

          <div data-aos="fade-left" className="boxes">
            <h1 className="heading">Professional Experience:</h1>
            • FULL-STACK DEVELOPER INTERN -2021 <br />
            MVP STUDIO
            <br />
            (AUCKLAND, NEW ZEALAND (REMOTE))
            <br />
            <br />
            • ICT SUPPORT TECHNICIAN -2019 <br />
            NSW DEPARTMENT OF CUSTOMER SERVICE
            <br />
            (SYDNEY, NSW AUSTRALIA)
            <br />
            <br />
            • IT SUPPORT/ FRONT-END DEVELOPER INTERN -2018 <br />
            GENIUS IT SOLUTIONS
            <br />
            (CANTERBURY, NSW AUSTRALIA)
            <br />
            <br />
          </div>
        </div>
        <div data-aos="fade-up" className="resumeLink">
          <p>
            If you wish to download my resume in PDF format. Please{" "}
            <a href="https://drive.google.com/uc?export=download&id=1mCX5fglk7a2p3iI3HqvbGKhkwNay0cwK">
              Click Here
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
}
