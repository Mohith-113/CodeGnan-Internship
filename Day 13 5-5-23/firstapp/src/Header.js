import React from "react";

class Header extends React.Component{
    state = {
        name : "Anabathula Mohith",
        Clg : "Dhanekula Institute of Engineering and Technology",
        Internship : "CodeGnan",
        Year : "2nd Year" ,
      }
       change=()=>{
        this.setState({
          name : "Mourya Chandra"
        })
      }
    render(){
        return(
            <div>{this.props.name} 
            
      <h1>I'm {this.state.name}. I'm Studying {this.state.Year} in {this.state.Clg}. I have Started Internship at {this.state.Internship}. </h1>
      <button onClick={this.change}>Change</button>
            </div>
            
        )
    }
}


export default Header;