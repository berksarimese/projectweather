import React from 'react';
import { useState } from 'react';
import './App.css';
import './styles/Bsstyle.css'
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




function App() {

  const [search, setSearch] = useState('Yalova');
  const [location, setLocation] = useState('');


  return (
    
    <div className='container-fluid d-flex flex-column justify-content-between gx-0 bbg' style={{height:'100vh'}}>
      <Navbar search={search} setSearch={setSearch} location={location} setLocation={setLocation} />
      <Main search={search} setSearch={setSearch}/>   
      <Footer />  
    </div>
  );
}

export default App;
