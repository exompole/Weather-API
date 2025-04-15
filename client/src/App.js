import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import backgroundImage from './assets/background.png';
import weatherIcon from './assets/weathericon.jpg';
import successVideo from './assets/success.mp4';
import customIcon from './assets/my-weather-icon.jpg';
import errorImage from './assets/error-city.jpg';


import sunnyTejas from './assets/sunny.jpg';
import rainyTejas from './assets/rainy.jpg';
import snowyTejas from './assets/snowy.jpg';
import cloudyTejas from './assets/cloudy.jpg';
import unknownTejas from './assets/unknown.jpg';



function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);
    setShowVideo(false);
    

    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
      setShowVideo(true);

      
      setTimeout(() => setShowVideo(false), 100000000);
    } catch (err) {
      setError('Nav Chukicha Takla Bhava Ashi City Ahaich Nahi');
    } finally {
      setLoading(false);
      
    }
  };
  
  const getFunnyTejasMessage = () => {
    if (!weather) return { message: '', image: null };
  
    const condition = weather.weather[0].main.toLowerCase();
    const temp = weather.main.temp;
    console.log('Current Temp:', temp);

  
    if (temp >= 35) {
      return {
        message: "🔥 It's hotter than Tejas' brain after spicy misal!",
        image: sunnyTejas,
      };
    }
    if (condition.includes('rain')) {
      return {
        message: "☔ Tejas says: Majbut Paus",
        image: rainyTejas,
      };
    }
    if (condition.includes('cloud')) {
      return {
        message: "🌥 Tejas is missing but the clouds are not!",
        image: cloudyTejas,
      };
    }
    if (temp <= 10) {
      return {
        message: "❄️ lay ghan dhandi aahe, Tejas is in his blanket!",
        image: snowyTejas,
      };
    }
  
    return {
      message: "🤔 Tejas doesn't know this weather but he's vibing anyway!",
      image: unknownTejas,
    };
  };
  

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: 'white',
        textShadow: '1px 1px 4px red',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img src={weatherIcon} alt="Weather Icon" style={{ width: '300px', borderRadius: '50%' }} />
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          margin: '1rem 0',
          color: '#1e1e1e'
      }}>
             Tejas Weather App
      </h1>

      </div>

      <div style={{ maxWidth: '400px', margin: 'auto', backgroundColor: 'rgba(164, 148, 148, 0.5)', padding: '1rem', borderRadius: '12px' }}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '0.5rem', width: '95%', marginBottom: '1rem', borderRadius: '8px' }}
        />

<button
  onClick={getWeather}
  style={{
    width: '100%',
    padding: '0.55rem',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    cursor: 'pointer',
    boxShadow: '0 4px 100px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease',
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
>
  🔍 Get Weather
</button>


  {loading && <p>Loading...</p>}
  {error && (
  <div
    style={{
      textAlign: 'center',
      marginTop: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '1rem',
      borderRadius: '10px',
      color: 'white',
      maxWidth: '300px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{error}</p>
    <img
      src={errorImage}
      alt="Error"
      style={{ width: '200px', borderRadius: '10px' }}
    />
  </div>
)}


  {weather && (
    <div style={{ marginTop: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
      <h1>{weather.name}</h1>
        <p><h3>{weather.weather[0].description}</h3></p>
        <p>🌡 Temp: {weather.main.temp}°C</p>
        <p>🤗 Feels Like: {weather.main.feels_like}°C</p>
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        <img
        src={customIcon}
          alt="Custom Weather Icon"
          style={{ width: '100px', height: '100px', borderRadius: '10px', marginTop: '0.5rem' }}
        />
        {(() => {
      const { message, image } = getFunnyTejasMessage();
      return (
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffeb3b' }}>{message}</p>
          <img
            src={image}
            alt="Tejas Reacting"
            style={{ width: '200px', borderRadius: '12px', marginTop: '0.5rem' }}
          />
        </div>
      );
    })()}

    </div>
  )}

        
  </div>

      
  {showVideo && (
  <>
    <video
      src={successVideo}
      autoPlay
      muted
      loop
      style={{
        position: 'fixed',
        top: '50%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        width: '20%',
        zIndex: 10,
        borderRadius: '12px',
        boxShadow: '0 0 10px black',
      }}
    />
    <video
      src={successVideo}
      autoPlay
      muted
      loop
      style={{
        position: 'fixed',
        top: '50%',
        right: '20%',
        transform: 'translate(50%, -50%)',
        width: '20%',
        zIndex: 10,
        borderRadius: '12px',
        boxShadow: '0 0 10px black',
      }}
    />
  </>
)}

    </div>
  );
}

export default App;