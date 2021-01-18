import React, { Component } from "react";
import DestinationItem from './DestinationItem';

class DestinationList extends Component {
    render() {
      return (
        <div className="main">
          <div className="list-headers">
            <h1>Destinations in Batata land</h1>
            <p>12+ destinations</p>
          </div>
          <div className="cards">
              <DestinationItem />
          </div>
      </div>
      );
    }
  }
   
export default DestinationList;