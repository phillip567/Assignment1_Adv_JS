import Navbar from './api/NavBar.js';
import WeatherApp from './/api/WeatherApp.js';

export default function Weather() {
  return (
    <div>
      <Navbar />
      <h1>Weather</h1>
      <WeatherApp />
    </div>
  );
}