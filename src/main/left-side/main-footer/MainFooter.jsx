import React from "react";
import MainItem from "./MainItem";
import { useSelector } from "react-redux";

function MainFooter() {
  const list = useSelector((state) => state.weather.weather.list.slice(0, 7));
  
  return (
    <>
      {list?.map((item) => (
        <MainItem item={item} key={item.dt} />
      ))}
    </>
  );
}

export default MainFooter;
