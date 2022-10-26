import React from "react";
import { useSelector } from 'react-redux'

function MainAside() {
  const currentWeather = useSelector(state => state.weather.currentWeather)
  console.log(currentWeather)
  return (
    <aside className="right-side">
      <img
        src={`image/main/aside/${currentWeather.weather[0].icon}.jpg`}

        alt={currentWeather.weather[0].main}
        className="main-img"
      />
    </aside>
  );
}

export default MainAside;
