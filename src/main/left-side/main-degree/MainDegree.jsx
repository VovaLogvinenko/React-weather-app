import React from "react";
import { useSelector } from 'react-redux'

function MainDegree() {
  const currentWeather = useSelector(state => state.weather.currentWeather)
  return (
    <main className="main-degree">
      <h1 className="main-degree__temp">{Math.round(currentWeather.main.temp - 273)}</h1>
      <img
        src={`image/main/main-degrees/${currentWeather.weather[0].icon}.svg`}
        alt="Sunny"
        className="main-degree__img"
        width="120"
      />
    </main>
  );
}

export default MainDegree;
