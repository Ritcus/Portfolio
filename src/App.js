import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";

import "./custom.css";
import { Home } from "./components/HomeComp/Home";
import Resume from "./components/ResumeComp/Resume";

import ContactMe from "./components/ContactMeComp/ContactMe";
import Project from "./components/Project/Project";
import DescriptionComp from "./components/HomeComp/DescriptionComp";

export default class App extends Component {
  static displayName = App.name;

  componentDidMount() {
    document.title = "Rikki Gautam || Portfolio";
  }

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/contactMe" component={ContactMe} />
        <Route path="/projects" component={Project} />
        <Route path="/description" component={DescriptionComp} />
      </Layout>
    );
  }
}
