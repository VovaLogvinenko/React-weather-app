import React from "react";

function MainItem({ item }) {
  return (
    <article className="main-footer__block">
      <h3 className="main-footer__title">{item.dt_txt.slice(10, 16)}</h3>
      <img
        src={`image/main/main-footer/${item.weather[0].icon}.svg`}
        alt="Clear sky"
        className="main-footer__img"
        width="40"
      />
      <p className="main-footer__degree">{Math.round(item.main.temp - 273)}&deg;</p>
    </article>
  );
}

export default MainItem;
