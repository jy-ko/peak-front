import React from "react";
import image from '../images/mount.jpg';

const Destination = () => {
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
   
export default Destination;