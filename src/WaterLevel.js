import React, { Component } from 'react';
import './css/style.css';


class WaterLevel extends Component {
    
    state = {
        lastWatered: '',
        waterInterval: ''
    }

    componentDidMount(){
        this.setState({ 
            lastWatered: this.props.lastWatered,
            waterInterval: this.props.waterInterval
        })
    }
    

//let ONE_DAY = 86400000; // one day in milliseconds/unixtime

    
  render() {
      
    return (
        <div className="waterLevelWrapper">
            <div className="waterLevel1"></div>
            <div className="waterLevel2"></div>
            <div className="waterLevel3"></div>
            <div className="waterLevel4"></div>
            <div className="waterLevel5"></div>
            <div className="waterLevel6"></div>
        </div>
        
    );
  }
}

export default WaterLevel;
