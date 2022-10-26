import { useState, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather, setBoolOff } from "features/weatherSlice";

function MainDate() {
  let date = new Date();
  const days = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const month = [
    "Січня",
    "Лютого",
    "Березня",
    "Квітня",
    "Травня",
    "Червня",
    "Липня",
    "Серпня",
    "Вересня",
    "Жовтня",
    "Листопада",
    "Грудня",
  ];
  // Дні, місяці пточна дата

  const [currentDay] = useState(date.getDate());
  const [currentNameDay] = useState(days[date.getDay()]);
  const [currentMonth] = useState(month[date.getMonth()]);
  // Отримання даних

  const [city, setCity] = useState("");
  // Поточне місто
  
  const weather = useSelector((state) => state.weather.weather);
  const bool = useSelector((state) => state.weather.bool);
  // Погода
  
  const dispatch = useDispatch();
  function addWeather() {
    dispatch(getWeather(city));
  }
  function addWeatherButton(e) {
    if(e.keyCode === 13) {
      dispatch(getWeather(city));
    }
  }

  function boolTurnOff() {
    setCity("");
    dispatch(setBoolOff());
  }


  return (
    <header className="main-header">
      <h2 className="main-header__date">
        {currentNameDay} {currentDay}
      </h2>
      <h2 className="main-header__date">{currentMonth}</h2>
      {bool ? (
        <h3 className="main-header__city">
          {weather.city.country === "US" ? "Штат" : "Місто"} {city}{" "}
          <span className="to-input" onClick={() => boolTurnOff()}>
            &times;
          </span>
        </h3>
      ) : (
        <div className="main-header__input-block">
          <input
            type="text"
            placeholder="Введіть назву міста..."
            onKeyDown={addWeatherButton}
            onChange={(e) => setCity(e.target.value)}
            autoFocus
            value={city}
            className="main-header__input"
            />
          <img
            src="image/main/main-date/search.svg"
            alt="Знайти"
            width="20"
            onClick={() => addWeather()}
            className="main-header__input-img"
          />
        </div>
      )}
    </header>
  );
}

export default MainDate;
