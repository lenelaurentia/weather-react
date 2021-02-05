import React from "react";
import "./DeveloperTag.css";

export default function DeveloperTag() {
  return (
    <div className="DeveloperTag">
      <a
        id="open-source"
        href="https://github.com/lenelaurentia/weather-react"
        target="blank"
      >
        Open-source code
      </a>
      <p id="name"> by Lene Nohr</p>
    </div>
  );
}
