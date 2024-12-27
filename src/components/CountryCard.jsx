import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.name.common}`);
  };

  return (
    <div className="country-card" onClick={handleClick}>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="100" />
      <h3>{country.name.common}</h3>
      <p>Code: {country.cca3}</p>
      <p>Region: {country.region}</p>
      <p>Borders: {country.borders ? country.borders.join(', ') : 'None'}</p>
    </div>
  );
};

export default CountryCard;