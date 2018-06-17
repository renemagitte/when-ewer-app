import React, { Component } from 'react';
import './css/style.css';
import AddNewPlant from './AddNewPlant';
import OnePlant from './OnePlant';
import ListOfPlants from './ListOfPlants';

import img1 from './img/pelargon.jpg';

class App extends Component {
    
    state = {
        view: 'listOfPlants'
    }

    
    plants = [
        /* 'lastWatered' & 'waterInterval' is set in Unix time in array */
        {species: "kaktus", desription: "taggig", image: img1, lastWatered: '50000', waterInterval: '500' },
        {species: "elefantöra", desription: "runda blad", image: img1, lastWatered: '70000000000', waterInterval: '600'}
    ]

    setView = (requestedView) => {
        this.setState({ view: requestedView });
    }

    addNewPlant = (speciesInput, descriptionInput) => {
        let newPlant = {species: speciesInput, description: descriptionInput, image: img1, lastWatered: Date.now(),}
        this.plants.push(newPlant);
        
        this.setView('listOfPlants');
    }


  render() {
      
      console.log(this.plants);
      
    let view;
    if(this.state.view === 'addNewPlant'){
        view = <AddNewPlant addNewPlant={this.addNewPlant} plants={this.plants} />
    }
    if(this.state.view === 'listOfPlants'){
        view = <ListOfPlants plants={this.plants}/>
    }
    if(this.state.view === 'onePlant'){
        view = <OnePlant plants={this.plants}/>
    }
      
    return (
        <div className="frame">
            <div className="wrapper">
                <div className="content">
                    Whenewer
                    <button className="addPlantButton" onClick={() => this.setView('addNewPlant')}>
                        Lägg till ny växt
                    </button>
                    
                { view }
                    
                </div>
            </div>
        </div>
        
    );
  }
}

export default App;
