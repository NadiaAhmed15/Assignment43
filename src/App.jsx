
// import './App.css';
// import { useState } from 'react';


// const App = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

  
//   const API_KEY = 'd7a846f6b0a435213a38719638559b6b';

//   const getWeather = async () => {
//     if (!city) {
//       alert('Please enter a city name');
//       return;
//     }

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     try {
//       const response = await fetch(url);

      
//       if (!response.ok) {
//         throw new Error('City not found');
//       }

//       const data = await response.json();
     
//       if (data.cod === 200) {
//         setWeather(data);
//         setError('');
//       } else {
//         setError('City not found');
//         setWeather(null);
//       }
//     } catch (err) {
//       setError(err.message || 'Error fetching weather data');
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Weather App</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="input-field"
//         />
//         <button onClick={getWeather} className="btn">
//           Get Weather
//         </button>
//       </div>

//       <div className="weather-info">
//         {error && <div className="alert">{error}</div>}
//         {weather && (
//           <div className="card">
//             <h3>{weather.name}, {weather.sys.country}</h3>
//             <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
//             <p><strong>Weather:</strong> {weather.weather[0].description}</p>
//             <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
//             <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import './App.css';
import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'd7a846f6b0a435213a38719638559b6b';

  const getWeather = async () => {
    const url = city
      ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      : null;

    url &&
      fetch(url)
        .then((response) => {
          return response.ok ? response.json() : Promise.reject('City not found');
        })
        .then((data) => {
          setWeather(data);
          setError('');
        })
        .catch((err) => {
          setError(err);
          setWeather(null);
        });
  };

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input-field"
        />
        <button onClick={getWeather} className="btn">
          Get Weather
        </button>
      </div>

      <div className="weather-info">
        {error && <div className="alert">{error}</div>}
        {weather && (
          <div className="card">
            <h3>
              {weather.name}, {weather.sys.country}
            </h3>
            <p>
              <strong>Temperature:</strong> {weather.main.temp}°C
            </p>
            <p>
              <strong>Weather:</strong> {weather.weather[0].description}
            </p>
            <p>
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
            <p>
              <strong>Wind Speed:</strong> {weather.wind.speed} m/s
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
