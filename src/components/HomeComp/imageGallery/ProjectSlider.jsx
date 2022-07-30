import React, {useEffect, useState} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import './gallery.css'

import {ImageCollection} from './ImageCollection'
const ProjectSlider=()=> {
  useEffect(() => {
    Aos.init({duration: 2000})
  
  }, [])

  const [linke, setLinke]= useState("")

  const linker=(a)=>{
    if (a<3){
      setLinke('projects#pTwo')
      console.log(linke)
    }
    else if (a>=3){
      setLinke('projects#pOne')

    }
  }
  
  

  return(
    <>
      <div className="gallery">
        {ImageCollection.map((item,index)=>{
          return(
            <div onClick={()=>linker(index)} data-aos="fade-up" className="pics" key={index}>
              <a href={linke}>
              <img  src={item.imgSrc} style={{width:'100%'}}/>
              </a>
            </div>
          )
        })}


      </div>
    </>
  )
    }
    
  


export default ProjectSlider