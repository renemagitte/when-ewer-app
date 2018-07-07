import React, { Component } from 'react';
import './css/style.css';

import WaterLevel from './WaterLevel'



class ListOfPlants extends Component {
    
    state = {
        input: '',
    }



    createListOfPlants = () => {
        let plantsArray = this.props.plants;
        let onePlantHeading = [];  
        
        for (let i = 0; i < plantsArray.length; i++) {
            
            onePlantHeading.push(
                <div className="onePlantWrapper">
                    <div className="onePlantImg">
                        <img src={plantsArray[i].image} />
                    </div>
                    <div className="onePlantText">
                        <div className="onePlantTitle">
                            {plantsArray[i].description}
                            
                        </div>
                        <div className="onePlantReadMore"  onClick={() => this.props.setView('infoPlant', plantsArray[i])}>
                            <ion-icon name="information-circle-outline"></ion-icon> Läs mer om växten.
                        </div>
                        <div>
                            Vattennivå:
                            <WaterLevel lastWatered={plantsArray[i].lastWatered} 
                                        waterInterval={plantsArray[i].waterInterval}
                                        setView={this.props.setView}
                                        viewOnePlant={plantsArray[i]}
                            />
                { /* (Senast vattnad: { plantsArray[i].lastWatered }) */ }
                        </div>
                    </div>
                </div>
            );
        }
        return(onePlantHeading);   
    }
    
    
  render() {

      

      
    return (
        <div>
            <div className="pageTitleDiv">
                <div className="floatLeft">
                    <h2>Dina växter</h2>
                </div>
        
                <div className="floatRight">
                    <button type="button" className="btn btn-success" onClick={() => this.props.setView('addNewPlant')}> 
                        <ion-icon name="add" onClick={() => this.props.setView('addNewPlant')}></ion-icon>
                         Lägg till ny växt
                    </button>
                </div>

        
            </div>
        
            {this.createListOfPlants()}
        </div>
        
    );
  }
}

export default ListOfPlants;
