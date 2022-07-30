import React, { Component } from 'react';
import { Collapse,Nav, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';



// import {Navbar, Nav, Container} from 'react-bootstrap'
import {BsFacebook,BsTwitter,BsLinkedin, BsGithub} from 'react-icons/bs'


import Logo from '../../images/Logo.png'

export default class NavMenu extends Component {
  static displayName = NavMenu.name;

  

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.isactiveFunction=this.isactiveFunction.bind(this)
    this.activeObjectFunction= this.activeObjectFunction.bind(this)
    this.state = {
      collapsed: true,
      activeId:null,
      isactive: false,
      locationCap: window.location.href,
     navList:[{id:1,
        linkto:"/",
        name:"Home"},
  
        
  
          {id:2,
            linkto:"/resume",
            name:"Resume"},
  
            {id:3,
              linkto:"/contactMe",
              name:"Contact Me"},
      ]
    };

    
  }

  

  activeObjectFunction(e){
   console.log(e.target.id)
    this.setState({
      activeId:e.target.id
    })

    this.isactiveFunction(this.state.activeId);
    
  }

  componentDidMount (){
console.log(this.state.locationCap)
  }


  isactiveFunction (linkto){
    console.log(linkto)
    var getUrl= window.location.href.split("/").pop()
   var addSlash='/'+ getUrl
    
   if(linkto!=null){
    
   if (addSlash ==linkto){
     return"nav-element active"
   }
   else{
    return "text-white nav-element"
   }
  }
   
  }


  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    
    return (


      <header>
        <Navbar fixed="top" className="navbar navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container >
          <NavbarBrand tag={Link} to="/"><img src= {Logo} alt="logo" width="60px"/><div className="logo">
      Rikki<font>GAUTAM</font>
      </div></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2"  />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse colapse " isOpen={!this.state.collapsed} navbar>
            <div className="changus"></div>
            
            <ul className='navbar-nav flex grow'>
            {this.state.navList.map((elements, index) => (
            
           <NavLink key={index} onClick={this.activeObjectFunction} className= {this.isactiveFunction(elements.linkto)}  tag={Link} id={elements.id}  to={elements.linkto}>{elements.name}</NavLink>
              
  
              ))}

                 {/* <NavItem className="nav-item">
                  <NavLink tag={Link} id='2'  className= {this.isactiveFunction(2)} to="/projects">Projects</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink tag={Link} id='3' className= {this.isactiveFunction(3)} to="/resume">Resume</NavLink>
                </NavItem>

                <NavItem className="nav-item">
                  <NavLink tag={Link} id='4' className= {this.isactiveFunction(4)} to="/contactMe">Contact Me</NavLink>
                </NavItem>  */}
                <NavLink onClick={this.activeObjectFunction} className= {this.isactiveFunction("/#projects")} href='#projects'>Projects</NavLink>
                <div className="changu"></div>
                
                <NavLink className="text-white nav-link" href="https://www.facebook.com/Ritcos" target="_blank"><BsFacebook/></NavLink>
                <NavLink className="text-white " href="https://twitter.com/ritcusmatgau11" target="_blank"><BsTwitter/></NavLink>
                  <NavLink className="text-white" href="https://www.linkedin.com/in/rikki-gautam-500b0463/" target="_blank"><BsLinkedin/></NavLink>
                  <NavLink className="text-white" href="https://github.com/Ritcus" target="_blank"><BsGithub/></NavLink>
              
                  </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
