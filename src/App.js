import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import infoBox from "./components/infoBox";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    console.log(countryCode);
    setCountry(countryCode);
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
    <div className="App">
      <div class="app_header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app_stats">
        <p>no wes</p>
        <infoBox title="Coronavirus Cases" />
        <p>kolejny</p>
        <infoBox title="Recovered" />
        <infoBox title="Deathes" />
      </div>
      {/*Infoboxs*/}
      {/*Infoboxs*/}
      {/*Infoboxs*/}

      {/*Table*/}
      {/*Graph*/}

      {/*Map*/}
    </div>
  );
}

export default App;
