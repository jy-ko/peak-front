import React, { Component } from "react";
import image from '../images/mount.jpg';

class DestinationItem extends Component {
    render() {
      return (
        <div className="card">
            <img src={image} alt="mountatin" />
            <p className="description">Stylist apartment in center of the city</p>
            <div className="card-text">
              <p >Easy</p>
              <p className="pl-2">6km</p>
            </div>
            
      </div>
      );
    }
  }
   
export default DestinationItem;