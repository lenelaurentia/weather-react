import React from "react";
import "./App.css";
import City from "./City";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import SearchForm from "./SearchForm";
import LocationButton from "./LocationButton";
import LastUpdate from "./LastUpdate";
import DeveloperTag from "./DeveloperTag";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="bod-style">
          <City />
          <CurrentWeather />
          <hr id="divider-top" />
          <Forecast />
          <hr id="divider-bottom" />
          <SearchForm />
          <LocationButton />
          <LastUpdate />
          <DeveloperTag />
        </div>
      </div>
    </div>
  );
}
