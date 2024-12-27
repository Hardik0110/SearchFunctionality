import React from 'react';
import CountryCard from '../components/CountryCard';
import CountryRegionPage from './CountryRegionPage';

const Homepage = ({ countries }) => {
  return (
    <div className="country-cards">
      {countries.map((country) => (
        <CountryCard 
          key={country.cca3} 
          country={country} 
        />
        
      ))}
      
    </div>
  );
};

export default Homepage;