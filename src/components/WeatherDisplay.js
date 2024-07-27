import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const color = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <span style={{ color }}>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
