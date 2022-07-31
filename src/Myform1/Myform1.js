import React from "react";
import '../Myform/Myform.css';

class Myform1 extends React.Component{
    constructor(props){
        super(props);
        this.state ={bookname:'username',authorname:'',borrowedby:'',dateofborrow:'',returndate:''};

        
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
        alert(' book form details added ')
    }

    render(){
        
        return (
            <div>
                <h3>Enter  Book  details </h3>
                <form onSubmit={this.handlesubmit}>
                <input type='text' name='bookname' placeholder="Bookname" 
                onChange={this.getInput} className='input-field'/>
                <br/>
                <input type='text'  name='authorname' placeholder="Author name"  onChange={this.getInput} className='input-field'></input>
                <br/>
                <input type='text'  name='borrowedby' placeholder="borrowedby studentname"  onChange={this.getInput} className='input-field'></input>
                <br/>
                <input type='date'  name='dateofborrow' placeholder="dateofborrow"  onChange={this.getInput} className='input-field'></input>
                <br/>
                <input type='date'  name='returndate' placeholder="returndate"  onChange={this.getInput} className='input-field'></input>
                {/* <textarea name='description' onChange={this.getInput}/> */}
                <br/>
                <input type='submit' name="submit" className='button-field' />
                </form>
                
            </div>);
    }
}
 
export default Myform1;