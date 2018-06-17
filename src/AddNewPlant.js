import React, { Component } from 'react';
import './css/style.css';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';

import photo from './img/zamiakalla.jpg';


class AddNewPlant extends Component {
    
    state = {
        formstep: 1,
        input: '',
        description: '',
        
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
    
    setFormStep = () => {
        this.setState({ formstep: this.state.formstep + 1 })
    }
    
    addNewPlant = () => {
            this.props.addNewPlant(this.state.input, this.state.description);
    }
    
  render() {
      
      console.log(this.props.plants);
      
      let formState;
      
      if(this.state.formstep === 1){
          formState = 
            <React.Fragment>
                <div className="addPlantProgress">
                Steg 1
                </div>
                <form /* onSubmit={this.onSubmit} */ >
                    <div className="cameraView">
                        <div className="cameraViewDemoAlert">
                            <div className="cameraViewDemoAlertText">
                            Tyvärr är inte kamerafunktionen utvecklad<br/>
                            i denna demoversion. Vänligen tryck "Hoppa över"<br/>
                            längre ner på sidan för att gå vidare.
                            </div>
                        </div>
                    
                    </div>
                    <div className="cameraIconButtonRow">
                        <div className="cameraIconButton" onClick={this.setFormStep} >
                            <i className="fas fa-camera cameraIcon"></i>
                        </div>
                    </div>
                </form>
            </React.Fragment>
      }
      
      if(this.state.formstep === 2){
          formState = 
              <React.Fragment>
                <div className="addPlantProgress">
                Steg 2
                </div>
                <form /* onSubmit={this.onSubmit} */ >
                    <FormLabel htmlFor="art" label="Art:" />
                    <FormInput onChange={this.handleChange} input={this.state.input} name="input" /> 
                    <FormSubmit className="buttonClass" buttonText="Nästa" onClick={this.setFormStep} />
                </form>
            </React.Fragment>
      }
      if(this.state.formstep === 3){
          formState = 
              <React.Fragment>
                <div className="addPlantProgress">
                Steg 3
                </div>
                <FormLabel htmlFor="description" label="Beskrivning:" />
                <FormInput onChange={this.handleChange} input={this.state.description} name="description" /> 
                Du kan redigera denna information senare om du vill.
                <FormSubmit className="buttonClass" buttonText="Nästa" onClick={this.addNewPlant} />
          
              </React.Fragment>
      }
//      if(this.state.formstep === 4){
//          formState = 
//              <React.Fragment>
//                <div className="addPlantProgress">
//                Steg 4
//                </div>
//                <FormLabel htmlFor="description" label="Beskrivning:" />
//                <FormInput onChange={this.handleChange} input={this.state.description} name="description" /> 
//                <FormSubmit className="buttonClass" buttonText="Lägg till" onClick={this.addPlant} />
//              </React.Fragment>
//      }
      
    return (
        <div>
            <h1>Lägg till ny växt</h1>

                { formState }

        </div>
        
    );
  }
}

export default AddNewPlant;
