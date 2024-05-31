import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center justify-center p-5  rounded-md bg-gray-600 hover:shadow-md hover:shadow-gray-500 text-white transition ease-in-out d hover:scale-105">
        <h1 className="text-2xl font-bold">{weather.location.name}</h1>
        <p className="text-xl">{weather.current.condition.text}</p>
        <p className="text-2xl">{weather.current.temp_c}°C</p>
        <img src={weather.current.condition.icon} alt="weather icon" />
      </div>
    </div>
  );
};

export default WeatherCard;
