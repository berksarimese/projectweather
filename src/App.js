import React from 'react';
import './App.css';
import './styles/Bsstyle.css'
import Main from './components/Main';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState('Yalova');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');


  return (
    
    <div className='container-fluid gx-0 bbg' style={{height:'100vh'}}>
      <Navbar search={search} setSearch={setSearch} location={location} setLocation={setLocation} />
      <Main search={search} setSearch={setSearch} weather={weather} setWeather={setWeather} />
      
    </div>
  );
}

export default App;
