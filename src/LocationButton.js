import React from "react";
import "./LocationButton.css";

export default function ButtonLocation() {
  return (
    <div className="LocationButton">
      <button class="btn btn-primary" id="current-location">
        Current Location
      </button>
    </div>
  );
}
