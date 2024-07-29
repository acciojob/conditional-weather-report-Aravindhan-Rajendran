import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const color = temperature > 20 ? 'rgb(255, 0, 0)' : 'blue'; // Conditional color based on temperature

  return (
    <div>
      <p style={{ color }}>Temperature: {temperature}</p>
      <span style={{ color }}>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
