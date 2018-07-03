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
            <ion-icon name="arrow-round-back" onClick={() => this.props.setView('listOfPlants')}></ion-icon>

        
            {this.props.viewOnePlant.description} behöver vattnas!!!
            <div className="onePlantImg">
                <img src={this.props.viewOnePlant.image} />
            </div>

        </div>
        
    );
  }
}

export default OnePlant;
