import React from "react";
import LastUpdate from "./LastUpdate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="City">
        <h1>{props.data.city}</h1>
      </div>

      <LastUpdate date={props.data.date} />

      <div className="Weather">
        <WeatherIcon code={props.data.icon} />

        <div className="CurrentDiv">
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="CurrentDescription">{props.data.description}</div>
        <div className="row">
          <div className="col">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/hr</li>
            </ul>
          </div>
          <div className="col">
            <div id="current-high">High: {Math.round(props.data.high)} </div>
            <div id="current-low">Low: {Math.round(props.data.low)} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
