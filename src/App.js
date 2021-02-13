import React from "react";
import "./App.css";
import Weather from "./Weather";
import LocationButton from "./LocationButton";
import DeveloperTag from "./DeveloperTag";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="bod-style">
          <Weather defaultCity="Vancouver" />
          <LocationButton />
          <DeveloperTag />
        </div>
      </div>
    </div>
  );
}
