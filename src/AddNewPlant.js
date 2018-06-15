import React, { Component } from 'react';
import './css/style.css';
import FormLabel from './FormLabel';
import Form from './Form';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';


class AddNewPlant extends Component {
    
    state = {
        input: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.input){
            this.props.onSubmit(this.state.input);
        } 
    }
    
  render() {
    return (
        <div>
            <h1>Lägg till ny växt</h1>
            <form onSubmit={this.onSubmit}>
                <FormLabel htmlFor="art" label="Art:" />
                <FormInput onChange={this.handleChange} input={this.state.input}/> 
                <FormSubmit className="buttonClass" buttonText="Lägg till" />
            </form>
        </div>
        
    );
  }
}

export default AddNewPlant;
