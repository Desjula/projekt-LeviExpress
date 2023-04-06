import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Odesílám fromulář s cestou")
    console.log('Form submitted:', fromCity, toCity, date);
  }

const [fromCity, setFromCity] = useState("");
const [toCity, setToCity] = useState("");
const [date, setDate] = useState("");

const handleFromCityChange = (e) => {
  setFromCity(e.target.value);
};

const handleToCityChange = (e) => {
  setToCity(e.target.value);
};

const handleDateChange = (e) => {
  setDate(e.target.value);
};

return(
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form className="journey-picker__form" onSubmit={handleSubmit}>
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value={fromCity} onChange={handleFromCityChange}>
            <option value="">Vyberte</option>
            <option value="mesto01">Město 01</option>
            <option value="mesto02">Město 02</option>
            <option value="mesto03">Město 03</option>
            <option value="mesto04">Město 04</option>
            <option value="mesto05">Město 05</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select value={toCity} onChange={handleToCityChange}>
            <option value="">Vyberte</option>
            <option value="mesto01">Město 01</option>
            <option value="mesto02">Město 02</option>
            <option value="mesto03">Město 03</option>
            <option value="mesto04">Město 04</option>
            <option value="mesto05">Město 05</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select value={date} onChange={handleDateChange}>
            <option value="">Vyberte</option>
            <option value="datum01">Datum 01</option>
            <option value="datum02">Datum 02</option>
            <option value="datum03">Datum 03</option>
            <option value="datum04">Datum 04</option>
            <option value="datum05">Datum 05</option>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
)};
