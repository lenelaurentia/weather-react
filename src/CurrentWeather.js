import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      description: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Current">
        <div className="City">
          <h1>{weatherData.city}</h1>
        </div>

        <div className="CurrentWeather">
          <img
            className="CurrentIcon"
            src={weatherData.imgUrl}
            alt={weatherData.description}
          />
          <div className="CurrentDiv">
            <div className="CurrentTemp">
              {Math.round(weatherData.temperature)}
            </div>
            <div className="units">
              <a href="/" className="active">
                °C
              </a>
              |<a href="/">°F</a>
            </div>
          </div>
          <div className="CurrentDescription">{weatherData.description}</div>
          <div className="row">
            <div className="col">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/hr</li>
              </ul>
            </div>
            <div className="col">
              <div id="current-high">High: {Math.round(weatherData.high)} </div>
              <div id="current-low">Low: {Math.round(weatherData.low)} </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4630bdec4a9dba06ebc0c195b85646bc";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
