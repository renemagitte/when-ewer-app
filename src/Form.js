import React, { Component } from 'react';

import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';

class Form extends Component {
    
    state = {
        username: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }
  
    handleUsername = (event) => {
        event.preventDefault();
        if(this.state.username){
            this.props.handleUsername(this.state.username);
        } 
    }
    
  render() {

    return (
        <div>
            <form onSubmit={this.handleUsername}>
        
                <FormLabel />
                
                <FormInput onChange={this.handleChange} username={this.state.username}/> 
        
                <FormSubmit />
        
            </form>
        </div>
        
      );
    }
}


export default Form;