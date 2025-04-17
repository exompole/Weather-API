import React from 'react';

function SearchInput({ city, setCity, getWeather }) {
  return (
    <input
      type="text"
      placeholder="Enter city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && getWeather()}
      style={{
        padding: '0.5rem',
        width: '95%',
        marginBottom: '1rem',
        borderRadius: '8px'
      }}
    />
  );
}

export default SearchInput;
