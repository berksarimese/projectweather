import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='container-fluid bg-dark gx-0' style={{height:'100vh'}}>
      <Navbar/>
    </div>
  );
}

export default App;
