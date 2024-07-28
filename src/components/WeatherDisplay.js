function WeatherDisplay({ weather }) {
  const { Temperature, Conditions } = weather;
  const color = Temperature > 20 ? 'rgb(255, 0, 0)' : 'blue'; // Using the same color from the test case

  return (
    <div>
      <p style={{ color }}>Temperature: {Temperature}°C</p>
      <p>Conditions: {Conditions}</p>
    </div>
  );
}
