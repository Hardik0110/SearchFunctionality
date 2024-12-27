import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetailsPage = ({ countries }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const country = countries.find(c => c.name.common === countryName);

  if (!country) {
    return <div>Country not found</div>;
  }

  const handleBorderClick = (border) => {
    const borderCountry = countries.find(c => c.cca3 === border);
    if (borderCountry) {
      navigate(`/country/${borderCountry.name.common}`);
    }
  };

  return (
    <div className="country-detail">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
      <h2>{country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <p>Code: {country.cca3}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <p>Borders: {country.borders ? country.borders.map(border => (
        <button key={border} onClick={() => handleBorderClick(border)}>{border}</button>
      )) : 'None'}</p>
    </div>
  );
};

export default CountryDetailsPage;