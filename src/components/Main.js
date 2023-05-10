import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import '../styles/Bsstyle.css'

function Main(props) {

  const weatherKey = '8e9ee1fb11abf672525dc41e433a1bc3';


  useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.search}&appid=${weatherKey}&units=metric&lang=tr`)
      .then(function (response) {
        props.setWeather(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log('error');
      })

  }, [props.search])

  useEffect(() => {
    console.log(props.weather);
  }, [props.weather])
  

  
  return ( 
    <div className='container'>
    <div className='container-fluid mx-auto px-5 py-5 mt-5 row col-md-12 bblury'>
      <div className='col-md-8'>
        {props.weather && (
          <div>
            <p className='display-1 my-0 text-uppercase'><strong>{props.weather.name}</strong><span className='h6 text-capitalize'> - {props.weather.sys.country}</span></p>
            <p className='display-6 my-0 text-capitalize'>Hava: {props.weather.weather[0].description}</p>
            <p className='display-6 my-0 text-capitalize'></p>
          </div>
        )}
      </div>
      <div className='col-md-4 d-flex align-items-center justify-content-end'>
        {props.weather && (
          <div>
          <p className='display-1 my-0'>{Math.floor(props.weather.main.temp)}&#176;</p>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Main;