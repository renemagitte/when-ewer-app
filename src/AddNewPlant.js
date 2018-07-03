import React, { Component } from 'react';
import './css/style.css';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';

import photo from './img/zamiakalla.jpg';


class AddNewPlant extends Component {
    
    state = {
        formstep: 1,
        
        species: '',
        description: '', 
        latinName: 'Plantnius Latinimus', 
        image: photo, 
        lastWatered: new Date().getTime(), // just watered
        waterInterval: 1000*60*5, // water every 5 minutes
        placement: 'Soligt',
        info: 'Denna fantasiväxt bör vattnas ungefär var femte minut. Den trivs bäst i starkt solljus och bör planteras om varje vår.'
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
    
    setFormStep = (step) => {
        this.setState({ formstep: step })
    }
    
    addNewPlant = () => {
            this.props.addNewPlant(
                this.state.species, 
                this.state.description,
                this.state.latinName,
                this.state.image,
                this.state.lastWatered,
                this.state.waterInterval,
                this.state.placement,
                this.state.info,
            );
    }
    
  render() {
      
      console.log(this.props.plants);
      
      let formState;
      
      if(this.state.formstep === 1){
          formState = 
            <React.Fragment>
                <div className="pageTitleDiv"> 
                    <h1>Lägg till ny växt -  steg 1/4</h1>
          
          
                </div>
          
                <form /* onSubmit={this.onSubmit} */ >
                    <div className="cameraView">
                        <div className="cameraViewDemoAlert">
                            <div className="cameraViewDemoAlertText">
                            Tyvärr är inte kamerafunktionen utvecklad
                            i denna demoversion. Tryck på "Hoppa över"
                            längre ner på sidan för att gå vidare.
                            </div>
                        </div>
                    
                    </div>
                    <div className="cameraIconButtonRow">
                        <div className="cameraIconButton" onClick={this.setFormStep} >
                            <i className="fas fa-camera cameraIcon"></i>
                        </div>
                    </div>
                    <ion-icon name="arrow-round-back" onClick={() => this.props.setView('listOfPlants')}></ion-icon> Tillbaka<br />
                    <button type="button" class="btn btn-info" onClick={() => this.setFormStep(2)}>Hoppa över</button>
                </form>
            </React.Fragment>
      }
      
      if(this.state.formstep === 2){
          formState = 
              <React.Fragment>
                <div className="pageTitleDiv"> 
                    <h1>Lägg till ny växt -  steg 2/4</h1>
                </div>
          
          
                <form /* onSubmit={this.onSubmit} */ >
                <div className="form-group">
                    <FormLabel htmlFor="species" label="Art:" className="addNewPlantFormHeading"/>
                    <FormInput onChange={this.handleChange} input={this.state.species} name="species" /> 
                    <FormSubmit className="btn btn-primary btn-lg" buttonText="Nästa" onClick={() => this.setFormStep(3)} />
                </div>
                </form>
            </React.Fragment>
      }
      if(this.state.formstep === 3){
          formState = 
              <React.Fragment>
                    <div className="pageTitleDiv"> 
                        <h1>Lägg till ny växt -  steg 3/4</h1>
                    </div>
                    <FormLabel htmlFor="description" label="Lägg till en rubrik för din växt:" />
                    <FormInput onChange={this.handleChange} input={this.state.description} name="description" placeholder={'T.ex. ' + this.state.species + ' i köksfönstret'}/> 
                    Du kan redigera denna information senare om du vill.
                    <FormSubmit className="btn btn-primary btn-lg" buttonText="Nästa" onClick={() => this.setFormStep(4)} />
          
              </React.Fragment>
      }
      
      if(this.state.formstep === 4){
          formState = 
              <React.Fragment>
                    <div className="pageTitleDiv"> 
                        <h1>Lägg till ny växt -  steg 4/4</h1><br/>                                 
                    </div>
                    <div className="confirmWrapper">
                        <div className="confirmValue"><h1>Granska information:</h1></div>
          
                        <div className="onePlantImg">
                            <img src={this.state.image} />
                        </div>
                        <div className="confirmKey">Din beskrivning: </div>
                        <div className="confirmValue">{this.state.description}</div>
                        <div className="confirmKey">Växtart: </div>
                        <div className="confirmValue">{this.state.species} ({this.state.latinName})</div>
                        
                        <div className="confirmKey">Skötselråd: </div>
                        <div className="confirmValue">Placera {this.state.placement} och vattna ungefär var {((this.state.waterInterval/1000) / 60)}:e dag. Appen kommer att påminna dig om detta.</div>
                                                                                           
                        <div className="confirmKey">Info om arten:</div>
                        <div className="confirmValue">{this.state.info}</div>
                    </div>                          

          
          
                    <FormSubmit className="btn btn-primary btn-lg" buttonText="LÄGG TILL VÄXT" onClick={this.addNewPlant} />
          
              </React.Fragment>
      }
      
    return (
        <div className="addNewPlantWrapper">

                { formState }

        </div>
        
    );
  }
}

export default AddNewPlant;
