import React, { Component } from 'react';
import './css/style.css';


class OnePlant extends Component {
    
    state = {
        input: '',
    }

//    componentDidMount(){
//        this.setState({ 
//            name: this.props.item.name,
//        })
//    }

    
  render() {
    return (
        <div className="infoPlantWrapper">
        
            <div className="standard">
                <button type="button" class="btn btn-secondary btn-lg" onClick={() => this.props.setView('listOfPlants')}>
                    <ion-icon name="arrow-round-back"></ion-icon> Tillbaka
                </button>
            </div><br />

            <div className="standard">
                <div className="onePlantImg">
                    <img src={this.props.viewOnePlant.image} />
                </div>
            </div>

            <div className="standard">
                <h2>{this.props.viewOnePlant.species}</h2> ({this.props.viewOnePlant.latinName})
            </div>
            <div className="standard">
                Placering: {this.props.viewOnePlant.placement}
            </div>
            <div className="standard">
                {this.props.viewOnePlant.info}
            </div>

        </div>
        
    );
  }
}

export default OnePlant;
