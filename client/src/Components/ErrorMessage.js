import React from 'react';
import errorImage from '../assets/error-city.jpg';

function ErrorMessage({ error }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem', backgroundColor: 'rgba(0,0,0,0.7)', padding: '1rem', borderRadius: '10px', color: 'white' }}>
      <p style={{ fontWeight: 'bold' }}>{error}</p>
      <img src={errorImage} alt="Error" style={{ width: '200px', borderRadius: '10px' }} />
    </div>
  );
}

export default ErrorMessage;
