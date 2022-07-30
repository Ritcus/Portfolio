import React, { Component } from 'react';
class Resume extends Component {
    constructor(props) {
        super(props);

        this.state={
            alu:0,
            navbars:false
        }

        this.abc=this.abc.bind(this)
    }
    


    componentDidMount(){
window.addEventListener('scroll', this.abc);
this.abc();

    }

    componentWillUnmount(){
window.removeEventListener('scroll', this.abc)

    }

    handleScroll(event){
        let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
        this.setState({
            transform:itemTranslate
        })
    }
    
    abc(){
        this.setState({alu:window.scrollY})
    }

    handleScroll = (event) => {
        if (event.deltaY > 0) {
          this.decreaseValue()
        } else {
          this.increaseValue()
        }
    }
    disableScroll = () => {
        document.addEventListener('wheel', this.preventDefault, {
          passive: false,
        })
    }

    render() {
        
        let resumeCond;

        if(this.state.alu >=0 && this.state.alu<95){
            console.log(this.state.alu)
        resumeCond=
           
            <div className="alus" style={{minHeight:"1000px"}} onMouseEnter={this.disableScroll} > 
                <div className="objectives">
                    <h1> Career Objectives {this.state.alu} </h1>
                    <p>sadadadadadaddasdasdsadasdasd</p>
                </div>
                </div>
        }

        else if (this.state.alu =95 && this.state.alu<104) { console.log(this.state.alu) 
            resumeCond=
            
                <div className="qualifications mt-10" style={{minHeight:"2000px"}}>
                    

                <h1> Qualifications </h1>
                    <p>sadadadadadaddasdasdsadasdasd</p>
                    
                    </div>
                    }

            else{
                 console.log(this.state.alu)
                 resumeCond=
                <div style={{minHeight:"1000px", marginTop:"30px"}}>
                <div className="skills" >
                <h1> Skills </h1>
                    <p>sadadadadadaddasdasdsadasdasd</p>
                </div>
                <div className="technical">
                <h1> Technical Skills </h1>
                    <p>sadadadadadaddasdasdsadasdasd</p>
                </div>
                <div className="workexp">
                <h1> Professional Work Experience </h1>
                    <p>sadadadadadaddasdasdsadasdasd</p>
                </div>
                <div className="volunteer">
                <h1> Volunteer </h1>
                    <p>sadadadadadaddasdasdsadasdasd</p>
                </div>
                <div className="hobbies">
                <h1> Hobbies </h1>
                    <p>sadadadadadaddasdasdsadasdasd</p>
                </div>
                </div>
            
                    }
                 
        
    

return(
<div className="mt-60">
    {resumeCond}
    asddddddddddddddddddddddddddddddddddd
</div>


)

}


}

Resume.propTypes = {

};

export default Resume;