import React from "react";
import "./LastUpdate.css";

export default function LastUpdate() {
  let data = {
    time: "12:08",
  };
  return (
    <div className="LastUpdate">
      <div id="update-time">Last updated {data.time}</div>
    </div>
  );
}
