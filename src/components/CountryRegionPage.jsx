import React from 'react';
import { useNavigate } from 'react-router-dom';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const CountryRegionPage = () => {
  const navigate = useNavigate();

  const handleRegionClick = (region) => {
    navigate(`/region/${region}`);
  };

  return (
    <div className="region-list">
      <h2>Regions</h2>
      {regions.map(region => (
        <button key={region} onClick={() => handleRegionClick(region)}>{region}</button>
      ))}
    </div>
  );
};

export default CountryRegionPage;