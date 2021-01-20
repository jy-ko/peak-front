import React from "react";
import Destination from './Destination';
// import destinations from '../destinations.json';

function DestinationList() {
    return (
      <div className="main">
        <div className="list-headers">
          <h1>Destinations in Batata land</h1>
          <p>12+ destinations</p>
        </div>
        <div className="cards">
            <Destination />
        </div>
    </div>
    );
  }
   
export default DestinationList;