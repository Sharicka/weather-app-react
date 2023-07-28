import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <>
      <div className="container">
        <form id="search-form">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search City"
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                />
              </div>
            </div>
          </div>
        </form>
        <button id="current-location-button" type="submit" className="btn">
          Current Location
        </button>
        <h1 id="current-city">Kingston, JA</h1>
        <span id="date-time">Thursday 4:04pm</span>
        <br />
        <span className="temp-description" id="temperature-description">
          Partly Cloudy
        </span>
        <div className="right-side-info">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            id="icon"
            alt="clear"
          />
          <h2 id="temperature">28</h2>
          <span className="units">
            <button onClick="" id="celsius-link" class="active">
              °C
            </button>{" "}
            |{" "}
            <button onClick="" id="fahrenheit-link">
              °F
            </button>
          </span>
        </div>

        <div className="details">
          Humidity: <span id="humidity">59</span>%
          <br />
          Wind: <span id="wind">45</span>km/h
        </div>

        <div className="weather-forecast" id="forecast"></div>
      </div>
      <footer>
        {" "}
        This project was coded by{" "}
        <strong>
          <a href="https://www.instagram.com/f.o.o.d.with.m.e/">
            Sharicka Clarke
          </a>
        </strong>{" "}
        and is{" "}
        <a
          href="https://github.com/Sharicka/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        hosted on{" "}
        <a href="https://fluffy-dolphin-a400ea.netlify.app/">Netlify</a>{" "}
      </footer>
    </>
  );
}
