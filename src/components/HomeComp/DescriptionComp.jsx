import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import './DescriptionComp.css'

import {FaReact, FaLaptopCode, FaDatabase} from 'react-icons/fa'
import Expertise from './Expertise'

export default function DescriptionComp() {
    useEffect(() => {
        Aos.init({duration: 2000})
      
      }, [])
  return (
      <div >
    <div data-aos="fade-up" className='descontainer'>
        <div className='expe'>
    <Expertise />
    </div>
        <div className='box'>
            <div className="iconi"> <FaReact className='fa' /> </div>
            <div className='content'>
                <h3>Front End Technologies</h3>
                <p> <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>React.js</li></p>
            </div>
        </div>

        <div className='box'>
        <div className="iconi"><FaLaptopCode className='fa' /></div>
        <div className='content'>
                <h3>Back-End Technologies</h3>
                <p><li>Node.js</li>
          <li>.Net/.Net Core</li>
          <li>C#</li></p>
            </div>
        </div>

        <div className='box'>
        <div className="iconi"><FaDatabase  className='fa'/></div>
        <div className='content'>
                <h3>Database / Deployment </h3>
                <p><li>Azure Deployment</li>
          <li>Microsoft SQL Server</li></p>
            </div>
        </div>
    </div>
    </div>
  )
}
