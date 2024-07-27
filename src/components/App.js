import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Example weather data
    const weatherInput = [
      { conditions: "Sunny" }
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
