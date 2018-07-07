import React, { Component } from 'react';
import './css/style.css';
import AddNewPlant from './AddNewPlant';
import InfoPlant from './InfoPlant';
import ListOfPlants from './ListOfPlants';
import Notification from './Notification';

import handWatch from './img/handWatch.png';
import ewer from './img/ewer.png';

import img1 from './img/pelargon.jpg';
import img2 from './img/elefantora.jpg';

class App extends Component {
    
    state = {
        view: 'listOfPlants',
        viewOnePlant: ''
        
    }

    plants = [
        /* The two first objects are example objects.
        /* 'lastWatered' & 'waterInterval' is set in Unix time in array */
        {
            species: "Pelargon", 
            latinName: "Pelargonium", 
            description: "Pelargon (rosa)", 
            image: img1, 
            lastWatered: ((new Date().getTime()) - (1000*60*60*24*1)), // watered 7 days ago
            waterInterval: 1000*60*60*24*7, // water every 14 days 
            placement: 'bör stå i ett varmt och soligt fönster.',
            info: 'Pelargonerna är komplexa hybridger inom gruppen näveväxter, med flertalet olika föräldra-arter. Till de mer framstående förfädrarna ingår dock smutspelargon. En vanligt förekommande färg på pelargonen är färgen lax. Pelargonen är både älskad och vanlig, men också ett samlarobjekt. Den finns i mindre storlekar så som miniatyrpelargon och mikrominiatyrpelargon. (Källa: Wikipedia)'
        },
        {
            species: "Elefantöra", 
            latinName: "Pilea peperomioides", 
            description: "Elefantöra", 
            image: img2, 
            lastWatered: ((new Date().getTime()) - (1000*60*60*24*3)),  // watered 3 days ago
            waterInterval: 1000*60*60*24*5, // water every 5 days
            placement: '',
            info: 'Elefantöra, även kallad parasollpilea, är en rundbladig växt från Kina som introducerades i Skandinavien år 1946.'
        }
    ]

    setView = (requestedView, requestedPlant) => {
        this.setState({ view: requestedView, viewOnePlant: requestedPlant });
    }

    addNewPlant = (speciesInput, descriptionInput, latinNameInput, imageInput, lastWateredInput, waterIntervalInput,placementInput, infoInput) => {
        let newPlant = {
            species: speciesInput, 
            description: descriptionInput, 
            latinName: latinNameInput,
            image: imageInput, 
            lastWatered: lastWateredInput,
            waterInterval: waterIntervalInput,
            placement: placementInput,
            info: infoInput
        }
        
        this.plants.push(newPlant);
        
        this.setView('listOfPlants');
    }


  render() {
      
    console.log(this.plants);
      
    let view;
    if(this.state.view === 'addNewPlant'){
        view = <AddNewPlant addNewPlant={this.addNewPlant} plants={this.plants} setView={this.setView} />
    }
    if(this.state.view === 'listOfPlants'){
        view = <ListOfPlants plants={this.plants} setView={this.setView} />
    }
    if(this.state.view === 'infoPlant'){
        view = <InfoPlant plants={this.plants} viewOnePlant={this.state.viewOnePlant} setView={this.setView} />
    }
    if(this.state.view === 'notification'){
        view = <Notification setView={this.setView} viewOnePlant={this.state.viewOnePlant} />
    }
      
    return (
        
        <React.Fragment>
        
                    <div className="desktopError">
               { /* <div className="desktopErrorImg"><img src={ewer} /></div> */ }
      <p><img src={ewer} /></p>
                Tyvärr! Denna applikation är endast anpassad<br/> 
                till skärmar med maxbredd 406 pixlar.
            </div>
        
        { /* <div className="headingWrapper"> */ }
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
        { /* </div> */ }

        
        
        <div className="desktopField">
        


        
        <div className="frame">
        
        
        
            <div className="wrapper">
                <div className="content">
                
        


                    
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
