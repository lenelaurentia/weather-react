import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    temp: 12,
    humidity: 42,
    wind: 5,
    high: 14,
    low: 8,
    description: "overcast clouds",
    imgUrl: "http://openweathermap.org/img/wn/04d@2x.png",
  };
  return (
    <div className="CurrentWeather">
      <img
        src={weatherData.imgUrl}
        alt={weatherData.description}
        id="current-icon"
      />
      <div id="current-div">
        <div class="CurrentTemp" id="current-temp">
          {weatherData.temp}
        </div>
        <div class="units">
          <a href="/" class="active">
            °C
          </a>
          |<a href="/">°F</a>
        </div>
      </div>
      <div id="current-description">{weatherData.description}</div>
      <div class="row">
        <div class="col" id="current-details">
          <ul id="humidity-wind">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/hr</li>
          </ul>
        </div>
        <div class="col" id="current-highlow">
          <div id="current-high">High: {weatherData.high} </div>
          <div id="current-low">Low: {weatherData.low} </div>
        </div>
      </div>
    </div>
  );
}
