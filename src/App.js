import React from 'react';
import './App.scss';
import DestinationList from './components/DestinationList';

class App extends React.Component {
  render() {
    return ( 
    <div className="container">
    <p>Navbar goes here</p>
    <DestinationList />
    <p>footer goes here</p>
    </div>
    )
  }
}

export default App;