// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    render() {
        return (
           <button onClick={this.handleClick}>Coordinates</button>
        )
    }

    handleClick = (event) => {
        let coordinatesArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }

}

export default CoordinatesButton