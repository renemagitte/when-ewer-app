import React, { Component } from 'react';
import './css/style.css';


class OnePlant extends Component {
    
    state = {
        input: '',
    }

    componentDidMount(){
        this.setState({ 
            name: this.props.item.name,
        })
    }

    
  render() {
    return (
        <div>

        </div>
        
    );
  }
}

export default OnePlant;
