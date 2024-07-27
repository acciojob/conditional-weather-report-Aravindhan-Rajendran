import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Example weather data
    const weatherInput = [
      { temperature: 25, conditions: "Sunny" },
      { temperature: 15, conditions: "Cloudy" },
      { temperature: 30, conditions: "Hot" }
    ];
    setWeatherData(weatherInput);
  }, []);

  return (
    <div>
      {weatherData.map((weather, index) => (
        <WeatherDisplay key={index} weather={weather} />
      ))}
    </div>
  );
}

export default App;
