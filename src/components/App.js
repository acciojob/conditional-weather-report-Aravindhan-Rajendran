import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Example weather data with temperature included
    const weatherInput = [
      {Temperature: 25, Conditions: "Sunny" }
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
