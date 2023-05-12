import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../styles/Bsstyle.css'

function Main(props) {

  //DATA
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
  
  //ANIMATION
  const anims = {
    visible : {
      y:0,
      opacity: 1
    },

    hidden : {
      y:-100,
      opacity: 0
    },

    degreeInitial : {
      rotate:0,
      opacity: 0      
    },

    degreeVisible : {
      rotate:360,
      opacity: 1
    },

    textInitial : {
      y:100,
      opacity: 0
    },

    textVisible : {
      y:0,
      opacity: 1
    }
  }
  

  
  return ( 
    <div className='container-fluid m-0 p-0'>
      <div className='d-flex justify-content-center mx-0 row col-md-12'>

        <div className='col-md-8 text-white bblury rounded-3 p-5'>
            
            {props.weather && (
              <div>
                <div className='row'>
                  <motion.div initial='hidden' animate='visible' variants={anims} key={props.weather.name} className='col text-center display-2 my-0 text-uppercase'>
                    <strong>{props.weather.name}</strong>
                    <span className='h6 text-capitalize'> - {props.weather.sys.country}</span> 
                    <img className='d-inline align-self-center' src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}.png`} style={{width:'70px'}}></img>
                  </motion.div>
                </div>

                <div className='d-flex justify-content-center text-center display-1 my-0 mt-4 bblury-two rounded-3' style={{fontSize:'15vw'}}><motion.div initial='degreeInitial' animate='degreeVisible' variants={anims} key={props.weather.name}>{Math.floor(props.weather.main.temp)}&#176;</motion.div></div>
                
                <motion.div initial='textInitial' animate='textVisible' variants={anims} key={[props.weather.weather[0].description,props.weather.name]} className='my-0 text-capitalize bblury rounded-3 text-center text-white text-dark mt-3' style={{fontSize:'1.1rem'}}>Hava: {props.weather.weather[0].description}</motion.div>
                
                {props.weather.rain && (
                  <motion.div initial='textInitial' animate='textVisible' variants={anims} key={props.weather.rain['1h']} className='my-0 text-capitalize bblury rounded-3 text-center text-white text-dark mt-3' style={{fontSize:'1.1rem'}}>Yağmur Hacmi: {props.weather.rain['1h']}mm</motion.div>
                )}
                {props.weather.snow && (
                  <motion.div initial='textInitial' animate='textVisible' variants={anims} key={props.weather.snow['1h']} className='my-0 text-capitalize bblury rounded-3 text-center text-white text-dark mt-3' style={{fontSize:'1.1rem'}}>Kar Hacmi: {props.weather.snow['1h']}mm</motion.div>
                )}
              </div>
            )}
          </div>
      </div>

    </div>
  )
}

export default Main;