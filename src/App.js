import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';
import { Lists } from './components/List/List';
import { Chart } from './components/Chart/Chart';

function App() {
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [chartCountries, setChartCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 24.8539615, lng: 66.9868871 });
  const [mapZoom, setMapZoom] = useState(3);
  const [listData, setListData] = useState([]);

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
          setMapCountries(data);
          setListData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/daily")
      .then((response) => response.json())
      .then((data) => {
        const modifiedData = data.map((dailyData) => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          reportDate: dailyData.reportDate
        }));
        setChartCountries(modifiedData);
      });
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
        countryCode === "worldwide" ? setMapCenter({ lat: 24.8539615, lng: 66.9868871 }) : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div style={{ background: 'rgb(214, 224, 234,.6)', paddingBottom: 10 }}>
      <Header country={country} countries={countries} onChange={onCountryChangeHandler} />
      <Cards changeCase={setCasesType} total={countryInfo.cases} active={countryInfo.active} recovered={countryInfo.recovered} deaths={countryInfo.deaths} />
      <Lists listData={listData} mapCountries={mapCountries} casesType={casesType} mapCenter={mapCenter} mapZoom={mapZoom} />
      <Chart data={chartCountries} />
    </div>
  );
}

export default App;
