import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCoutries] = useState([]);


// https://disease.sh/v3/covid-19/countries

// useEffect = runs a piece of code based on a given condition
// The code inside will runs once when the component loads and not again
// async -> send a request, wait for it, do somethin with it
useEffect(()=> {
  const getCountriesData = async() => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response)=>response.json())
    .then((data)=> {
      const countries = data.map((country)=> ({
          name: country.country,
          value: country.countryInfo.iso2
        }));

    setCoutries(countries);
      });

  getCountriesData();
    }, []);


  return (
    <div className="App">
      <div class="app_header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}

            {/* 
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem> */}
          </Select>{" "}
        </FormControl>
      </div>

      {/*Header*/}
      {/*Titile + Select input dropdown field*/}

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
