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
                        <div className="onePlantSpecies">
                            {plantsArray[i].species}
                        </div>
                        <div>
                            <WaterLevel />
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
