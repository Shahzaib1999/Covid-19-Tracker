import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';
import { Lists } from './components/List/List';
import { Container, MenuItem, FormControl, Select } from '@material-ui/core';
import numeral from "numeral";

function App() {
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);

  const sortData = (data) => {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          // setMapCountries(data);
          // setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChangeHandler = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        // setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        // setMapZoom(4);
      });
  };

  return (
    <div style={{ background: 'rgb(214, 224, 234,.6)', height: window.innerHeight }}>
      <Container>
        <div className="headerWrapper">
          <p className="header">Covid-19</p>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChangeHandler}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country, ind) => (
                <MenuItem key={ind} value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Container>
      <Cards total={numeral(countryInfo.cases).format("0.0a")} active={numeral(countryInfo.active).format("0.0a")} recovered={numeral(countryInfo.recovered).format("0.0a")} deaths={numeral(countryInfo.deaths).format("0.0a")} />
      <Lists />
    </div>
  );
}

export default App;
