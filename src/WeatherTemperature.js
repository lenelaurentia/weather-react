import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <div className="CurrentTemp">{Math.round(props.celcius)}</div>
        <div className="units">
          °C | {""}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="CurrentTemp">{Math.round(fahrenheit())}</div>
        <div className="units">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
          {""}
          <div className="units">| °F</div>
        </div>
      </div>
    );
  }
}
