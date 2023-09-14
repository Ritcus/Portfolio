import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import Logo from "../../images/Logo.png";

export default class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.isactiveFunction = this.isactiveFunction.bind(this);
    this.activeObjectFunction = this.activeObjectFunction.bind(this);
    this.state = {
      collapsed: true,
      activeId: null,
      isactive: false,
      locationCap: window.location.href,
      navList: [
        { id: 1, linkto: "/", name: "Home" },

        { id: 2, linkto: "/resume", name: "Resume" },

        { id: 3, linkto: "/contactMe", name: "Contact Me" },
      ],
    };
  }

  activeObjectFunction(e) {
    console.log(e.target.id);
    this.setState({
      activeId: e.target.id,
    });

    this.isactiveFunction(this.state.activeId);
  }

  componentDidMount() {
    console.log(this.state.locationCap);
  }

  isactiveFunction(linkto) {
    console.log(linkto);
    var getUrl = window.location.href.split("/").pop();
    var addSlash = "/" + getUrl;

    if (linkto != null) {
      if (addSlash == linkto) {
        return "nav-element active";
      } else {
        return "text-white nav-element";
      }
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          fixed="top"
          className="navbar navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img src={Logo} alt="logo" width="60px" />
              <div className="logo">
                Rikki<font>GAUTAM</font>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse colapse "
              isOpen={!this.state.collapsed}
              navbar
            >
              <div className="changus"></div>

              <ul className="navbar-nav flex grow">
                {this.state.navList.map((elements, index) => (
                  <NavLink
                    key={index}
                    onClick={this.activeObjectFunction}
                    className={this.isactiveFunction(elements.linkto)}
                    tag={Link}
                    id={elements.id}
                    to={elements.linkto}
                  >
                    {elements.name}
                  </NavLink>
                ))}
                <NavLink
                  onClick={this.activeObjectFunction}
                  className={this.isactiveFunction("/#projects")}
                  href="#projects"
                >
                  Projects
                </NavLink>
                <div className="changu"></div>

                <NavLink
                  className="text-white nav-link"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <BsFacebook />
                </NavLink>
                <NavLink
                  className="text-white "
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <BsTwitter />
                </NavLink>
                <NavLink
                  className="text-white"
                  href="https://www.linkedin.com/in/rikki-gautam-500b0463/"
                  target="_blank"
                >
                  <BsLinkedin />
                </NavLink>
                <NavLink
                  className="text-white"
                  href="https://github.com/Ritcus"
                  target="_blank"
                >
                  <BsGithub />
                </NavLink>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
