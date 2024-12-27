import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = ({ countries }) => {
  const { cca3 } = useParams();
  const country = countries.find(c => c.cca3 === cca3);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="country-detail">
      <h2>{country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
      <div>
        <h4>Native Names:</h4>
        {country.name.nativeName && Object.keys(country.name.nativeName).map((lang) => (
          <div key={lang}>
            <p>{lang}:</p>
            <p>Official: {country.name.nativeName[lang].official}</p>
            <p>Common: {country.name.nativeName[lang].common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetail;