import React, { useState, useContext, useEffect } from "react";
import DestinationItem from './DestinationItem';
import destinations from '../destinations.json';
import { UserContext } from '../UserContext'

function DestinationList() {
  const [state, setState] = useState(destinations)
  const Context = useContext(UserContext)
  let location = Context.location
  location=location.split(',')
  location=location[0]

  useEffect(() => {
    let filtered = destinations.filter(destination => destination.city === location);
    setState(filtered.length === 0 ? destinations : filtered)
}, [location])

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
   
export default DestinationList;