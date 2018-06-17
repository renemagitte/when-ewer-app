import React, { Component } from 'react';
import './css/style.css';


class WaterLevel extends Component {
    
//    state = {
//        input: '',
//    }
//
//    componentDidMount(){
//        this.setState({ 
//            name: this.props.item.name,
//        })
//    }

    
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
