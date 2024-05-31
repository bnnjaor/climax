import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        className="p-1 bg-gray-600 text-white  rounded-l-md focus:outline-none focus:shadow-md focus:shadow-white"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ingrese una ciudad"
      />
      <button
        className="p-[0.38rem] text-sm bg-gray-700 text-white rounded-r-md"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
