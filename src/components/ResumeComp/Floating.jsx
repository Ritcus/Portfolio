import React from "react";

import avatar from "../../images/avatar.jpg";

import { NavItem, NavLink } from "reactstrap";

import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

import "./Floating.css";

export const Floating = () => {
  return (
    <div className="avatarBG">
      <div className="avatar">
        <a href="resume#secondSection">
          <img className="avatarimg" src={avatar} />
        </a>
      </div>
      <NavItem className="avatarIcon mt-3">
        <NavLink
          className="text-black iconA"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <BsFacebook />
        </NavLink>
        <NavLink
          className="text-black iconA "
          href="https://twitter.com/"
          target="_blank"
        >
          <BsTwitter />
        </NavLink>
        <NavLink
          className="text-black iconA"
          href="https://www.linkedin.com/in/rikki-gautam-500b0463/"
          target="_blank"
        >
          <BsLinkedin />
        </NavLink>
        <NavLink
          className="text-black iconA"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <BsInstagram />
        </NavLink>
        <NavLink
          className="text-black iconA"
          href="https://github.com/Ritcus"
          target="_blank"
        >
          <BsGithub />
        </NavLink>
      </NavItem>


      <div className="btnResume">
        <a href="resume#secondSection">
          <button className="buttonResume">Start Here</button>
        </a>
      </div>
      <div className="scrollBelow"> Scroll Below</div>

      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="Secondarrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
