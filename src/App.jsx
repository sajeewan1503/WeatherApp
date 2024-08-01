import { useState } from "react";
import "./App.css";

// Importing Image
import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear.png";
import cloudyIcon from "./assets/cloudy.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rain.png";
import windyIcon from "./assets/windy.png";
import snowIcon from "./assets/rain.png";
import humidityIcon from "./assets/humidity.png";

const WeatherDetails = ({ icon, temp, city, country, lat, log }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="Image" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="lat">Logitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percent">%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windyIcon} alt="humidity" className="icon" />
          <div className="data">
            <div className="wind-speed">5 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("INDIA");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);

  return (
    <>
      <div className="container">
        <div className="input-contrainer">
          <input type="text" className="cityInput" placeholder="Search City" />
          <div className="search-icon">
            <img className="img" src={searchIcon} alt="Search" />
          </div>
        </div>
        <WeatherDetails
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          log={log}
        />
      </div>
    </>
  );
}

export default App;
