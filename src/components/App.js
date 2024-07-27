import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Example weather data
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
