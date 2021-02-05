import React from "react";
import "./City.css";

export default function City() {
  let data = {
    city: "Vancouver",
  };
  return (
    <div className="City">
      <h1 id="location">{data.city}</h1>
    </div>
  );
}
