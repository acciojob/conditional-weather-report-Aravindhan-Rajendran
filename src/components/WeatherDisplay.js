import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const color = Temperature > 20 ? 'rgb(255, 0, 0)' : 'blue'; // Using the same color from the test case

  return (
    <div>
      <p style={{ color }}>Temperature: {Temperature}</p>
      <span style={{ color }}>Conditions: {Conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
