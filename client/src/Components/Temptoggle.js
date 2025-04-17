import React from "react";

function TempToggle({ isCelsius, setIsCelsius }) {
  return (
    <div style={{ textAlign: "center", margin: "1rem 0" }}>
      <button
        onClick={() => setIsCelsius(!isCelsius)}
        style={{
          backgroundColor: "#444",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Switch to {isCelsius ? "Fahrenheit (°F)" : "Celsius (°C)"}
      </button>
    </div>
  );
}

export default TempToggle;
