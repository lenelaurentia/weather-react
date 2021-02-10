import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import SearchForm from "./SearchForm";
import LocationButton from "./LocationButton";
import DeveloperTag from "./DeveloperTag";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="bod-style">
          <CurrentWeather defaultCity="Vancouver" />
          <hr id="divider-top" />
          <Forecast />
          <hr id="divider-bottom" />
          <SearchForm />
          <LocationButton />
          <DeveloperTag />
        </div>
      </div>
    </div>
  );
}
