'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Main = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Bilaspur');
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      fetchWeather(city);
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const fetchWeather = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`;

    try {
      const { data } = await axios.get(url);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="flex items-center justify-center mt-24 max-h-screen ">
      <div className=" rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl text-black font-semibold text-center mb-5">Weather Forecast</h2>
        <form onSubmit={handleSubmit} className="flex flex-row space-x-2">
  <input
    type="text"
    value={city}
    onChange={handleInputChange}
    placeholder="Enter city name"
    className="p-2 border rounded text-gray-800 focus:outline-none focus:border-blue-500"
  />
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded">
    Get Weather
  </button>
</form>

        {weather && (
          <div className="mt-4">
            <div className="bg-blue-600 w-full h-52 p-6 rounded-lg shadow-lg text-white">
  <div className="flex flex-row justify-between items-center mb-4">
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold">Today</h2>
      <p className="text-sm opacity-70">{new Date().toLocaleDateString()}</p>
    </div>
    <div className="flex items-center">
      <h2 className="text-4xl font-bold mr-2">{Math.round(weather.main.temp)}°C</h2>
      <Image
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        height={50}
        width={50}
        alt="weather icon"
      />
    </div>
  </div>
  <div className="flex flex-row justify-between">
    <div className="flex flex-col">
      <p className="text-sm opacity-70">Min: {Math.round(weather.main.temp_min)}°C</p>
      <p className="text-sm opacity-70">Max: {Math.round(weather.main.temp_max)}°C</p>
    </div>
    <h2 className="text-lg font-semibold">{weather.name}</h2>
  </div>
  <div>
    <h3 className='mt-5 text-sm opacity-70'>Real Feel {weather.main.feels_like}</h3>
  </div>


  



</div>


           </div>
        )}
      </div>
    </div>
  );
};

export default Main;
