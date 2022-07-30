import React,{useEffect} from 'react'
import { Col, Container, Row } from 'reactstrap';
import Slider from './ProjectOne/SliderOne';
import SliderThree from './ProjectThree/SliderThree';
import SliderTwo from './ProjectTwo/SliderTwo';

import { Spinner } from 'react-bootstrap';

import Aos from "aos";
import "aos/dist/aos.css";

import './Project.css'

export default function Project() {
    
    useEffect(() => {
        Aos.init({duration: 2000})
      
      }, [])

  
    return (
        <div>
            
            <div id='pOne' className='projectMain' >
            <h1>Some of my works</h1>
            <div className='projectInclose' >
            <Container>
                <Row>
                <div className='headings'>
                <h1> CRUD SMS </h1>
                <span>Date: 12/12/2021</span>
                </div>
                </Row>

                    <Row>
                    
                        <Col className='projectDescp' >
                        
                <p> This is my first project which I have completed during my training with MVP Studio.
                    It is a simple CRUD Web App which.
                    The following technologies has been used:
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MVC with .Net Core </li>
                    <li>Microsoft SQL Server </li>
                    
                     </p>
                </Col>
                
                <Col className="sliders">
                <Slider />
                <div className='alink'>
                    <a href="https://github.com/Ritcus/SalesManagementSystem" className='alink' target="_blank">Github Link !!</a> </div>
                </Col>
                
                </Row> 
                
                </Container>
                </div>
                </div>

                <div id='pTwo' className='projectMain' >
            <div className='projectInclose' >
            <Container>
                <Row>
                <div className='headings'>
                <h1> Project Portfolio </h1>
                <span>Date: 22/04/2021</span>
                </div>
                </Row>
                    <Row>
                    
                        <Col className='projectDescp' >   
                <p>This is one of personal favorite. It helped me to learn more in-depth on CSS, HTML and JavaScript.
                The following technologies has been used in this project:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React Bootstrap UI </li>
                    <li>React.js </li>
                    <li>MVC with .Net Core </li>
                    
                </p>
                </Col>
                <Col className="sliders">
                <SliderTwo />
                </Col>
                
                </Row> 
                
                </Container>

                
                </div>
                <div data-aos="fade-up" className='loading'> <h6>More exciting Projects, Coming soon!!</h6> 
                <div className='progress-bar'>
                   <span></span></div>
                   
                   </div>

                   <Spinner className='spinnered' animation="border" variant="success" />
                </div>

                

                {/* <div id='pThree' className='projectMain' >
            <div className='projectInclose' >
            <Container>
                <Row>
                <div className='headings'>
                <h1> Project Portfolio </h1>
                <span>Date: 12/12/2021</span>
                </div>
                </Row>
                
                
                    <Row>
                    
                        <Col className='projectDescp' >
                        
                <p>This was my very first project and I really enojoyed doing it. This was my very first project and I really enojoyed doing it. This was my very first project and I really enojoyed doing it. This was my very first project and I really enojoyed doing it.This was my very first project and I really enojoyed doing it </p>
                </Col>
                <Col className="sliders">
                <SliderThree />
                </Col>
                
                </Row> 
                
                </Container>
                </div>
                </div> */}
                
        
    </div>
    )
}
