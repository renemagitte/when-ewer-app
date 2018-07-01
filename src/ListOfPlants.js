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
                            {plantsArray[i].species}
                            
                        </div>
                        <div className="onePlantReadMore">
                            <ion-icon name="information-circle-outline"></ion-icon> Läs mer om växten
                        </div>
                        <div>
                            Vattennivå:
                            <WaterLevel lastWatered={plantsArray[i].lastWatered} 
                                        waterInterval={plantsArray[i].waterInterval}
                                        setView={this.props.setView}/>
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
            <h2>Dina växter</h2>
            {this.createListOfPlants()}
        </div>
        
    );
  }
}

export default ListOfPlants;
