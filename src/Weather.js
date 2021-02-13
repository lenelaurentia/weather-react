import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";

import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "4630bdec4a9dba06ebc0c195b85646bc";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <CurrentWeather data={weatherData} />
        <hr id="divider-top" />
        <Forecast />
        <hr id="divider-bottom" />
        <div className="SearchForm">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              id="search-bar"
              type="text"
              placeholder="Enter city"
              autoComplete="off"
              class="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button
              id="search-icon"
              type="submit"
              value="search"
              class="btn btn-primary"
            >
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
