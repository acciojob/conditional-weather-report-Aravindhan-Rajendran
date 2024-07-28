import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const color = temperature > 20 ? 'rgb(255, 0, 0)' : 'blue'; // Conditional color based on temperature

  return (
    <div>
      <span style={{ color }}>Temperature: {temperature}</span>
      <span style={{ color, display: 'block' }}>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
