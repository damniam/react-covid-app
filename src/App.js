import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import InfoBox from "./components/infoBox";
import Map from "./components/Map";
import Graph from "./components/Graph";
import Table from "./components/Table";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    // worldwide - we use ---> https://disease.sh/v3/covid-19/all
    // select country we will use --> https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode); //update countryCode
        setCountryInfo(data); //all of the data from the country response

        console.log(countryInfo);
      });
  };
  // https://disease.sh/v3/covid-19/countries

  // useEffect = runs a piece of code based on a given condition
  // The code inside will runs once when the component loads and not again
  // async -> send a request, wait for it, do somethin with it

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso3,
          }));

          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <div className="app_header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app_stats">
          <InfoBox
            title="Coronavirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Deathes"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <div className="app_map">
          <Map />
        </div>
      </div>

      <div className="app__right">
        <Card className="sidebar">
          <CardContent>
            <h3>Live Cases by Country</h3>
            <Table />
            <h3>Worldwide new cases</h3>
            <Graph />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
