import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const api = {
  key: "ed956a98dc4b4cbb8632832c3545a5ee",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>
        
        {/* Search Box - Input + Button */}
        <div>
          <input
            type = "text"
            placeholder = "Enter city/town..."
            onChange = {(e) => setSearch(e.target.value)}
          />
          <button onClick= {searchPressed}>Search</button>          
        </div>
        
        {/* If weather is not undefined */}
        { typeof weather.main != "undefined" ? (
          <div>
          {/* Location */}
            <p>{weather.name}</p>

          {/* Temperature Celsius */}
            <p>{weather.main.temp}°C</p>

          {/* Condition (Sunny) */}
          
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}

        
      </header>
    </div>
  );
}

export default App;
