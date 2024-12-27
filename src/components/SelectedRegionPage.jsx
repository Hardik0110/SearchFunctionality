import React from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../components/CountryCard';

const SelectedRegionPage = ({ countries }) => {
  const { regionName } = useParams();
  const regionCountries = countries.filter(country => country.region.toLowerCase() === regionName.toLowerCase());

  return (
    <div className="country-cards">
      <h2>Countries in {regionName}</h2>
      {regionCountries.map(country => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default SelectedRegionPage;