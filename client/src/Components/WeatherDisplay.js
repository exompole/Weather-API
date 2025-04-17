import React from 'react';

function WeatherDisplay({ weather, getFunnyTejasMessage, isCelsius }) {
  const { message, image } = getFunnyTejasMessage(weather);

  const temp = isCelsius
    ? weather.main.temp
    : (weather.main.temp * 9) / 5 + 32;

  const feelsLike = isCelsius
    ? weather.main.feels_like
    : (weather.main.feels_like * 9) / 5 + 32;

  return (
    <div
      style={{
        marginTop: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '0.5rem',
        borderRadius: '10px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <h2 style={{ margin: 0 }}>{weather.name}</h2>
      <p style={{ margin: 0 }}>{weather.weather[0].description}</p>
      <p style={{ margin: 0 }}>
        🌡 Temp: {temp.toFixed(1)}°{isCelsius ? 'C' : 'F'}
      </p>
      <p style={{ margin: 0 }}>
        🤗 Feels Like: {feelsLike.toFixed(1)}°{isCelsius ? 'C' : 'F'}
      </p>
      <p style={{ margin: 0 }}>💧 Humidity: {weather.main.humidity}%</p>
      <p style={{ margin: 0 }}>💨 Wind Speed: {weather.wind.speed} m/s</p>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#ffeb3b',
          }}
        >
          {message}
        </p>
        <img
          src={image}
          alt="Tejas Reaction"
          style={{
            width: '200px',
            borderRadius: '12px',
            marginTop: '0.5rem',
          }}
        />
      </div>
    </div>
  );
}

export default WeatherDisplay;
