import React, { Component } from 'react';
import './css/style.css';
import AddNewPlant from './AddNewPlant';
import OnePlant from './OnePlant';
import ListOfPlants from './ListOfPlants';

import img1 from './img/pelargon.jpg';

class App extends Component {
    
    state = {
        view: 'listOfPlants',
        
    }

    plants = [
        /* The two first objects are example objects.
        /* 'lastWatered' & 'waterInterval' is set in Unix time in array */
        {
            species: "kaktus", 
            desription: "taggig", 
            image: img1, 
            lastWatered: ((new Date().getTime()) - (1000*60*60*24*7)), // watered 7 days ago
            waterInterval: 1000*60*60*24*14 // water every 14 days 
        },
        {
            species: "elefantöra", 
            desription: "runda blad", 
            image: img1, 
            lastWatered: ((new Date().getTime()) - (1000*60*60*24*3)),  // watered 3 days ago
            waterInterval: 1000*60*60*24*5 // water every 5 days
        }
    ]

    setView = (requestedView) => {
        this.setState({ view: requestedView });
    }

    addNewPlant = (speciesInput, descriptionInput) => {
        let newPlant = {
            species: speciesInput, 
            description: descriptionInput, 
            image: img1, 
            lastWatered: Date.now()
        }
        
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
        view = <ListOfPlants plants={this.plants} setView={this.setView}/>
    }
    if(this.state.view === 'onePlant'){
        view = <OnePlant plants={this.plants}/>
    }
      
    return (
        <div className="frame">
            <div className="wrapper">
                <div className="content">
                    Whenewer
        <button type="button" className="btn btn-success roundify" onClick={() => this.setView('addNewPlant')}>
                        +
                    </button>
                    
                { view }
                    
                </div>
            </div>
        </div>
        
    );
  }
}

export default App;
