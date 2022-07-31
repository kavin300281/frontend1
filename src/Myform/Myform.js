import React from "react";
import './Myform.css';

class Myform extends React.Component{
    constructor(props){
        super(props);
        this.state ={firstname:'username',lastname:''};

        
    }
    getInput=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state,'usernme');
    }
    getphone=(event)=>{
        this.setState({phone:event.target.value});
        console.log(this.state,'usernme');
    }
    handlesubmit=()=>{
        alert('form submitted '+this.state.firstname+this.state.lastname)
    }

    render(){
        
        return (
            <div>
                <h3>Enter  Student details </h3>
                <form onSubmit={this.handlesubmit}>
                <input type='text' name='firstname' placeholder="First name" 
                onChange={this.getInput} className='input-field'/>
                <br/>
                <input type='text'  name='lastname' placeholder="Last name"  onChange={this.getInput} className='input-field'></input>
                <br/>
                {/* <textarea name='description' onChange={this.getInput}/> */}
                <br/>
                <input type='submit' name="submit" className='button-field'/>
                </form>
                
            </div>);
    }
}
 
export default Myform;