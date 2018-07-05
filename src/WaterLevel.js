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
        notification: false
        
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
            waterInterval1: this.props.lastWatered + (this.props.waterInterval)
        })
        
        setInterval(
          () => this.setTime(),
          1000 // Update 1 time per second
        );        
    }

      setTime = () => {   
            if (this.state.nextWaterTime > this.state.currentTime ) { 
                this.setState({ currentTime: new Date().getTime() });  
            }
          else{
//               this.props.setView('notification', this.props.viewOnePlant); 
                this.setState({ notification: true  })
            }
      }
      
      setLastWatered = () => {
          this.setState({ lastWatered: new Date().getTime(), 
                          nextWaterTime: new Date().getTime() + this.props.waterInterval,
                          waterInterval5: ((new Date().getTime()) + (this.props.waterInterval*0.2)),
                          waterInterval4: ((new Date().getTime()) + (this.props.waterInterval*0.4)),
                          waterInterval3: ((new Date().getTime()) + (this.props.waterInterval*0.6)),
                          waterInterval2: ((new Date().getTime()) + (this.props.waterInterval*0.8)),
                          waterInterval1: ((new Date().getTime()) + (this.props.waterInterval))
                        
                        })
//        this.setState({ nextWaterTime: new Date().getTime() + this.props.waterInterval })  
          
//          this.setState({ nextWaterTime: this.state.lastWatered + this.props.waterInterval })
          
//            this.setState({ 
//                waterInterval5: this.state.lastWatered + (this.props.waterInterval*0.2),
//                waterInterval4: this.state.lastWatered + (this.props.waterInterval*0.4),
//                waterInterval3: this.state.lastWatered + (this.props.waterInterval*0.6),
//                waterInterval2: this.state.lastWatered + (this.props.waterInterval*0.8),
//                waterInterval1: this.state.lastWatered + (this.props.waterInterval)
//            })
   
//          this.resetWaterLevels();
          
          this.setState({ notification: false  })
//        this.setState({ nextWaterTime: this.state.lastWatered + this.props.waterInterval })   
//          this.resetWaterLevels();
          
}
          
          
//          this.setState({
//    someState: obj
//}, () => {
//    this.afterSetStateFinished();
//});
          
          
          
          
          
      
      setNotificationFalse = () => {
          this.setState({ notification: false  })
      } 
      
      resetWaterLevels = () => {
            
            this.setState({ 
                waterInterval5: this.state.lastWatered + (this.props.waterInterval*0.2),
                waterInterval4: this.state.lastWatered + (this.props.waterInterval*0.4),
                waterInterval3: this.state.lastWatered + (this.props.waterInterval*0.6),
                waterInterval2: this.state.lastWatered + (this.props.waterInterval*0.8),
                waterInterval1: this.state.lastWatered + (this.props.waterInterval)
            })
          
      }
      
//      setNotificationFalse = () => {
//          this.setState({ notification: false  })
//      }
//      
//      setNotification = () => {
//        this.setState({ notification: true  })
//      }




    
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

        let notification = ''
        if(this.state.notification){
            notification = 
              
                <React.Fragment>
                    <div className="notificationBg">
                        
                        <div className="notificationBox">
                            <div class="notificationBoxInner">
                                <h1> Vi åberopar din inre trädgårdsmästare! </h1>
                            </div>
                           <div class="notificationBoxInner">
                                <div className="onePlantImg">
                                        <img src={this.props.viewOnePlant.image} />
                                </div>
                            </div>
                          <div class="notificationBoxInner">
                                {this.props.viewOnePlant.description}
                            </div>
                          <div class="notificationBoxInner">
                              behöver vattnas!
                         </div>
                          <div class="notificationBoxInner">
                                <button type="button" class="btn btn-danger btn-lg" onClick={this.setNotificationFalse}>
                                    <ion-icon name="notifications-off"></ion-icon>
                                    Nej tack. Kanske senare.
                                </button>
                         </div>
                          <div class="notificationBoxInner">
                                <button type="button" class="btn btn-success btn-lg" onClick={this.setLastWatered}>
                                    <ion-icon name="checkmark"></ion-icon>
                                    Vattnad
                                </button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
             
        }
        
      
      
        return (
            <React.Fragment>
            { notification }
                <div className="waterLevelWrapper">
                    <div className={waterLevel1}></div>
                    <div className={waterLevel2}></div>
                    <div className={waterLevel3}></div>
                    <div className={waterLevel4}></div>
                    <div className={waterLevel5}></div>
                </div>
            </React.Fragment>

        );
      }
    }

export default WaterLevel;
