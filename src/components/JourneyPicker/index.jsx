import React, { useEffect, useState } from "react";
import mapImage from "./img/map.svg";
import { CityOptions } from "./CityOptions";
import "./style.css";
import { DatesOptions } from "./DatesOptions";

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState("");
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/cities")
      .then((response) => response.json())
      .then((data) => setCities(data.results));

    fetch("https://apps.kodim.cz/daweb/leviexpress/api/dates")
      .then((response) => response.json())
      .then((data) => setDates(data.results));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`
    )
      .then((response) => response.json())
      .then((data) => {
        onJourneyChange(data);
      });
  };

  const handleFromCityChange = (e) => {
    setFromCity(e.target.value);
  };

  const handleToCityChange = (e) => {
    setToCity(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={handleFromCityChange}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={handleToCityChange}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={handleDateChange}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={!fromCity || !toCity || !date}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
