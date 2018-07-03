import React, { Component } from 'react';
import './css/style.css';


class WaterLevel extends Component {
    
    state = {
        lastWatered: '',
        nextWaterTime: '',
        nextWater: '',
        waterInterval: '',
        currentTime: '',
        
        waterInterval5: '',
        waterInterval4: '',
        waterInterval3: '',
        waterInterval2: '',
        waterInterval1: '',
        
    }

    componentDidMount(){
        this.setState({ 
 
            lastWatered: this.props.lastWatered,
            waterInterval: this.props.waterInterval,
            nextWaterTime: this.props.lastWatered + this.props.waterInterval,
            currentTime: new Date().getTime(),
            
            waterInterval5: this.props.lastWatered + (this.props.waterInterval*0.2),
            waterInterval4: this.props.lastWatered + (this.props.waterInterval*0.4),
            waterInterval3: this.props.lastWatered + (this.props.waterInterval*0.6),
            waterInterval2: this.props.lastWatered + (this.props.waterInterval*0.8),
            waterInterval1: this.props.lastWatered + (this.props.waterInterval),
        })
        
        setInterval(
          () => this.setTime(),
          1000*60 // Update 1 time per minute
        );        
    }

      setTime = () => {   
            if (this.state.nextWaterTime > this.state.currentTime ) { 
                this.setState({ currentTime: new Date().getTime() });  
            }else{
               this.props.setView('notification', this.props.viewOnePlant); 
            }
      }




    
      render() {

        let waterLevel5 = 'waterLevel5';
        if(this.state.currentTime > this.state.waterInterval5){
            waterLevel5 += ' waterLevelEmpty';
        }

        let waterLevel4 = 'waterLevel4';
        if(this.state.currentTime > this.state.waterInterval4){
            waterLevel4 += ' waterLevelEmpty';
        }

        let waterLevel3 = 'waterLevel3';
        if(this.state.currentTime > this.state.waterInterval3){
            waterLevel3 += ' waterLevelEmpty';
        }

        let waterLevel2 = 'waterLevel2';
        if(this.state.currentTime > this.state.waterInterval2){
            waterLevel2 += ' waterLevelEmpty';
        }


        let waterLevel1 = 'waterLevel1';
        if(this.state.currentTime > this.state.waterInterval1){
            waterLevel1 += ' waterLevelEmpty';
        }

      
      
        return (
            <div className="waterLevelWrapper">
                <div className={waterLevel1}></div>
                <div className={waterLevel2}></div>
                <div className={waterLevel3}></div>
                <div className={waterLevel4}></div>
                <div className={waterLevel5}></div>
            </div>

        );
      }
    }

export default WaterLevel;
