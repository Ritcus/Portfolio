import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import Tippy from "@tippyjs/react";
import "./Home.css";
import pic from "../../images/mypic.png";
import DescriptionComp from "./DescriptionComp";
import Project from "../Project/Project";

export class Home extends Component {
  static displayName = Home.name;

  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  render() {
    return (
      <div>
        <div className="maincontainer">
          <div className="theleft">
            <div className="theleftwrapper">
              <h1 className="personalName">Rikki Gautam</h1>

              <div className="line"></div>
              <div className="big-screen">.Net/Web Developer</div>
              <div className="title">
                <div className="d-none d-md-block title-wrapper">
                  <div className="item">Junior Web Developer</div>
                  <div className="item">Junior .Net Developer</div>
                  <div className="item">IT Support Technician</div>
                  <div className="item">Junior Web Developer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="theright">
            <div className="i-bg"></div>
            <img src={pic} className="imgright" />
          </div>
        </div>

        <div className="secondcontainer">
          <DescriptionComp />
        </div>

        <div id="projects" data-aos="fade-up" className="thirdcontainer">
          <div className="projectslide">
            <Project />
          </div>
        </div>

        <div className="aVai">
          <Tippy
            interactive={true}
            animateFill={true}
            delay={300}
            content={
              <span id="content">Want to be in touch? Contact Me!!</span>
            }
            theme="custom"
            placement="left"
          >
            <a href="/contactMe">
              <span>
                <RiContactsLine />
              </span>
              <div className="liquid"></div>
            </a>
          </Tippy>
        </div>
        <a className="gotopbtn" href="#">
          <FaArrowUp />
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    );
  }
}
