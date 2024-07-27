import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const color = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color }}>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
