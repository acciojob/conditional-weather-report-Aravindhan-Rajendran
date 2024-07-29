import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });
useEffect(() => {
    setWeatherData({ temperature: 25, conditions: "Sunny" });
}, []);
return (
    <div>
        <WeatherDisplay weather={weatherData} />
    </div>
);
}

export default App;
