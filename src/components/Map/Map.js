import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
// import { showDataOnMap } from "./util";
import { Circle, Popup } from "react-leaflet";

import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  const casesTypeColors = {
    cases: {
      hex: "#A3ABAC",
      rgb: "#A3ABAC",
      half_op: "#A3ABAC",
      multiplier: 800,
    },
    active: {
      hex: "#F4C10A",
      rgb: "#B99202",
      half_op: "#B99202",
      multiplier: 800,
    },
    recovered: {
      hex: "rgb(87, 203, 114,.7)",
      rgb: "rgb(87, 203, 114,.7)",
      half_op: "#028120",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 2000,
    },
  };

  const showDataOnMap = (data, casesType = "cases") =>
    data && data.map((country, ind) => (
      <Circle
        key={ind}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        fillOpacity={0.4}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
      >
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            ></div>
            <div className="info-name">{country.country}</div>
            <div className="info-confirmed">
              Cases: {country.cases}
            </div>
            <div className="info-recovered">
              Recovered: {country.recovered}
            </div>
            <div className="info-deaths">
              Deaths: {country.deaths}
            </div>
          </div>
        </Popup>
      </Circle>
    ));
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://github.com/shahzaib1999">Shahzaib</a>'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
