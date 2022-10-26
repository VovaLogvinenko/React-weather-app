import React from "react";
import MainDate from "./left-side/main-date/MainDate";
import MainDegree from "./left-side/main-degree/MainDegree";
import MainAside from "./main-aside/MainAside";
import MainFooter from "./left-side/main-footer/MainFooter";
import { useSelector } from 'react-redux'

function Main() {
  const bool = useSelector(state => state.weather.bool)
  return (
    <div className="main">
      <div className="left-side">
        <MainDate />
        {bool ? <MainDegree /> : ""}
        <footer className="main-footer">
            {bool ? <MainFooter /> : ""}
        </footer>
      </div>
      {bool ? <MainAside />: ""}
    </div>
  );
}

export default Main;
