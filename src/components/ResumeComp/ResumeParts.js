import React from "react";
import {useState} from 'react'



const ResumeParts = () => {
    const [count, setCount] = useState(0);
    
    const components = [
        <div> <div className="alus" > 
        <div className="objectives">
            <h1> Career Objectives </h1>
            <p>sadadadadadaddasdasdsadasdasd</p>
        </div>
        </div></div>,
        <div><div className="qualifications mt-10">
                    

        <h1> Qualifications </h1>
            <p>sadadadadadaddasdasdsadasdasd</p>
            
            </div></div>,
        <div>3</div>,
        <div>4</div>
    ]

    return (<div className="diva" >
        {
            // render component from our components array
            components[count]
        }

        {/* show previous button if we are not on first element */}
        {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}

        {/* hide next button if we are at the last element */}
        {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}
    </div>
    )
}


export default ResumeParts