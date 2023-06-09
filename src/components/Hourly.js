import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../styles/Bsstyle.css";

const Hourly = (props) => {


    const [hourly, setHourly] = useState("");
    const [weather, setWeather] = useState("");
    const containerRef = useRef(null);
  
    //DATA
    const weatherKey = "8e9ee1fb11abf672525dc41e433a1bc3";
  
    
    useEffect(() => {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=${weatherKey}&units=metric&lang=tr`)
    .then(function (fData) {
      setHourly(fData.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    }, [props.search]);

    //SAAT HESAPLAMA
  const tarihHesapla = (e) => {
    const zamanDizisi = e;
    const zamanObjesi = new Date(zamanDizisi);
    const saat = zamanObjesi.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const gün = zamanObjesi.getDate();
    const ay = zamanObjesi.getMonth();
    const ayIsimleri = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ];
    const ayIsmi = ayIsimleri[ay];

    return (
      <div>
        <div className="text-black-50">
          {gün} {ayIsmi}
        </div>
        <div className="text-primary">{saat}</div>
      </div>
    );
  };

  //ANIMATION
  const anims = {
    visible: {
      y: 0,
      opacity: 1,
    },

    hidden: {
      y: -100,
      opacity: 0,
    },

    opsIni: {
      x:0,
      opacity: 1,
    },

    opsHdn: {
      x: -500,
      opacity: 0,
    },

    degreeInitial: {
      rotate: 0,
      opacity: 0,
    },

    degreeVisible: {
      rotate: 360,
      opacity: 1,
    },

    textInitial: {
      y: 100,
      opacity: 0,
    },

    textVisible: {
      y: 0,
      opacity: 1,
    },
  };


  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex justify-content-center mx-0 row col-md-12">
        
        
        <div className="col-md-8 p-0 mt-3 py-2 px-1 bblury rounded">
        {hourly && (
          <div className="d-flex p-0 overflow-hidden py-0" ref={containerRef}>
            <motion.div
              className="d-flex gap-3"
              initial="opsHdn"
              animate="opsIni"
              variants={anims}
              drag="x"
              dragConstraints={containerRef}
              transition={{ duration: 1 }}
              key={hourly.city.name}
            >
              

                {hourly.list.slice(0, 15).map((list, i) => (
                  <div
                    className="col bblury rounded text-black p-2"
                    style={{ width: "120px", height: "120px" }}
                    key={i}
                  >
                    
                    <div className="d-flex flex-direction-row display-6">
                      {Math.floor(list.main.temp)}&#176;{" "}
                      <img
                        className="d-inline align-self-center"
                        src={`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`}
                        alt="none"
                      ></img>
                    </div>
                    <div>{tarihHesapla(list.dt_txt)}</div>
                  </div>
                ))}
            </motion.div>
          </div> 
          )}
        </div>
        <div className="col-md-8 h6 text-center text-black-50 mt-2">Diğer saatler için <span className="text-primary">yatay</span> sürükleyin</div>
      </div>
    </div>
  )
}

export default Hourly;