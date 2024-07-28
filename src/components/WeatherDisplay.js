import React from 'react';

function WeatherDisplay({ weather }) {
  const { Temperature, Conditions } = weather;
  const color = Temperature > 20 ? 'rgb(255, 0, 0)' : 'blue'; // Conditional color based on temperature

  return (
    <div>
      <p style={{ color }}>Temperature: {Temperature}</p>
      <span style={{ color }}>Conditions: {Conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
