import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const color = temperature > 20 ? 'rgb(255, 0, 0)' : 'blue'; // Conditional color based on temperature

  return (
    <div>
      <p style={{ color: color }}><span>Temperature: {temperature}</span></p>
      <p style={{ color: color }}><span>Conditions: {conditions}</span></p>
    </div>
  );
}

export default WeatherDisplay;
