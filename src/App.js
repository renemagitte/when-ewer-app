import React, { Component } from 'react';
import './css/style.css';
import AddNewPlant from './AddNewPlant';
import OnePlant from './OnePlant';
import ListOfPlants from './ListOfPlants';

import handWatch from './img/handWatch.png';
import ewer from './img/ewer.png';

import img1 from './img/pelargon.jpg';
import img2 from './img/elefantora.jpg';

class App extends Component {
    
    state = {
        view: 'listOfPlants',
        
    }

    plants = [
        /* The two first objects are example objects.
        /* 'lastWatered' & 'waterInterval' is set in Unix time in array */
        {
            species: "Kaktus", 
            latinName: "kaktus", 
            desription: "taggig", 
            image: img1, 
            lastWatered: ((new Date().getTime()) - (1000*60*60*24*1)), // watered 7 days ago
            waterInterval: 1000*60*60*24*14 // water every 14 days 
        },
        {
            species: "Elefantöra", 
            latinName: "kaktus", 
            desription: "runda blad", 
            image: img2, 
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
        
        <React.Fragment>
                <div className="headingWrapper">
                <div className="heading">
                    <div className="headingLeft">
                        <img src={handWatch} />
                    </div>
                    <div className="appName">
                        When<br/>
                        ewer
                    </div>
                    <div className="headingRight">
                        <img src={ewer} />
        
                    </div>
                </div>
                </div>
        
        
        <div className="desktopField">
        


        
        <div className="frame">
        
        
        
            <div className="wrapper">
                <div className="content">
                
        
        <ion-icon name="add-circle" onClick={() => this.setView('addNewPlant')}></ion-icon>
        
        
{ /* <button type="button" className="btn btn-success roundify" onClick={() => this.setView('addNewPlant')}> 
                        +
                    </button><br/> */ }
                    
                { view }
                    
                </div>
            </div>
        </div>
        </div>

</React.Fragment>
        
    );
  }
}

export default App;
