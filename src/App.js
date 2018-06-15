import React, { Component } from 'react';
import './css/style.css';
import AddNewPlant from './AddNewPlant';

class App extends Component {
    
    state = {
        view: ''
    }

    plants = [
        {spieces: "", desription: ""}
    ]

addNewPlant = (speicesInput) => {
    let newPlant = {speices: speicesInput}
    this.plants.push(newPlant);
}

  render() {
      
      console.log(this.plants)
    return (
        <div className="frame">
            <div className="wrapper">
                <div className="content">
                    Hej
                    <AddNewPlant onSubmit={this.addNewPlant} />
                </div>
            </div>
        </div>
        
    );
  }
}

export default App;
