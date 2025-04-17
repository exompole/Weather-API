// ✅ File: App.js
import React, { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/background.png";
import weatherIcon from "./assets/weathericon.jpg";
import successVideo from "./assets/success.mp4";

import SearchInput from "./Components/Searchinput";
import WeatherDisplay from "./Components/WeatherDisplay";
import ErrorMessage from "./Components/ErrorMessage";
import LoadingSpinner from "./Components/LoadingSpinner";
import VideoPlayer from "./Components/VideoPlayer";
import SearchHistory from "./Components/SearchHistory";
import getFunnyTejasMessage from "./Components/getFunnyTejasMessage";
import getWeatherData from "./Components/getWeatherData";
import TempToggle from "./Components/Temptoggle";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [history, setHistory] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);
    setShowVideo(false);

    try {
      const data = await getWeatherData(city);
      setWeather(data);

      setHistory((prev) => (prev.includes(city) ? prev : [...prev, city]));

      setShowVideo(true);
      setTimeout(() => setShowVideo(false), 1000000000);
    } catch (err) {
      setError("Nav Chukicha Takla Bhava Ashi City Ahaich Nahi");
    } finally {
      setLoading(false);
    }
  };
  const handleHistoryClick = (selectedCity) => {
    setCity(selectedCity);
    setTimeout(() => getWeather(), 100);
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
        color: "white",
        textShadow: "1px 1px 4px red",
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={weatherIcon}
          alt="Weather Icon"
          style={{ width: "250px", borderRadius: "30%" }}
        />
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: "700",
            margin: "1.5rem 0",
            color: "#1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
          }}
        >
          Tejas Weather Hub
        </h1>
      </div>

      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "rgba(164, 148, 148, 0.5)",
          padding: "1rem",
          borderRadius: "15px",
        }}
      >
        <SearchInput city={city} setCity={setCity} getWeather={getWeather} />
        <button
          onClick={getWeather}
          style={{
            width: "100%",
            padding: "0.75rem 1.5rem",
            background: "linear-gradient(145deg, #6e7e8a, #3b4e58)",
            border: "none",
            borderRadius: "25px",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            outline: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🔍 Search
        </button>

        <TempToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />

        {weather && (
          <WeatherDisplay
            weather={weather}
            getFunnyTejasMessage={getFunnyTejasMessage}
            isCelsius={isCelsius}
          />
        )}
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage error={error} />}
      </div>

      {history.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "52%",
            left: "16.4rem",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "1rem",
            borderRadius: "12px",
            width: "200px",
            zIndex: 5,
          }}
        >
          <SearchHistory
            history={history}
            onHistoryClick={handleHistoryClick}
          />

          <button
            onClick={() => setHistory([])}
            style={{
              marginTop: "1rem",
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#8b0000",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🧹 Clear History
          </button>
        </div>
      )}

      {showVideo && <VideoPlayer videoSrc={successVideo} />}
    </div>
  );
}

export default App;
