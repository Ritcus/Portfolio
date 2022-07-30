import React, { Component } from 'react';
import { Container } from 'reactstrap';
import  NavMenu  from './NavbarComp/NavMenu.jsx';
import '../custom.css'

import ImgVar from '../images/wall1.jpg'
import Footer from './FooterComp/Footer.jsx';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className='wholeapp'>
        <img src={ImgVar} className="bg" />
        <NavMenu />
        <Container className="ml-2 mr-2 cont">
          {this.props.children}
        </Container>
        <Footer/>
      </div>
    );
  }
}
