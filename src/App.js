import React, { useState } from 'react';
import './App.scss';
import DestinationList from './components/DestinationList';
import Header from './components/Header';
import Footer from './components/Footer';

export let UserContext =''

function App() {
  const [location, setLocation] = useState("");

  const list = [
    'Helsinki,Finland',
    'Turku,Finland',
    'Oulu,Finland',
    'Vaasa,Finland'
  ]
  UserContext = React.createContext({location,list,updateLocation})

    return ( 
      <div className="App">
        <UserContext.Provider value={{location,list,updateLocation}}>
        <Header />
        <DestinationList />
        <Footer />
        </UserContext.Provider>
    </div>
    );

    function updateLocation(e){
      let value = e;
      value =value.split(',')
      setLocation(value[0])
    }
};

export default App;