import React from 'react';

function SearchHistory({ history }) {
  if (history.length === 0) return null;

  return (
    
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🔍 Search History</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {history.map((cityName, index) => (
          <li key={index} style={{ margin: '0.5rem 0', color: '#f0f0f0' }}>{cityName}</li>
        ))}
      </ul>
      
    </div>
    
  );
}

export default SearchHistory;
