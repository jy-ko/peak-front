import React from 'react';
import './App.scss';
import DestinationList from './components/DestinationList';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
    return ( 
      <>
        <header>
          <div className="logo">Peak 🏔</div>
          <Search />
        </header>
        <DestinationList />
        <Footer />
      </>
    );
};
export default App;