import React, { Component } from "react";
import image from '../images/mount.jpg';

class DestinationItem extends Component {
    render() {
      return (
        <div className="card">
            <img src={image} alt="mountatin" />
            <p>type</p>
            <p>distance</p>
            <b>description</b>
      </div>
      );
    }
  }
   
export default DestinationItem;