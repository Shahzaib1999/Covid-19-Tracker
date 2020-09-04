import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
// import { showDataOnMap } from "./util";
import { Circle, Popup } from "react-leaflet";

import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
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
    data && data.map((country) => (
      <Circle
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
          attribution='&copy; <a href="">Shahzaib</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
