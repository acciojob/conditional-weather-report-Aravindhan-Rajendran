import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const color = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color }}>Temperature: {temperature}</p>
      <span style={{ color }}>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
