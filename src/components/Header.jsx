import React, { useState , useEffect } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';

const Header = ({ onSearch, onFilterChange }) => {
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value === 'independent' ? true : value === 'dependent' ? false : null);
  };

  const handleRegionClick = () => {
    setTerm('')
    onSearch('')
    navigate('/country-region');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
    setTerm('');
  };

  return (
    <header className="header">
      <button className="region-button" onClick={handleRegionClick}>Region</button>
      <form onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Search for a country..." 
          value={term} 
          onChange={handleSearchChange} 
        />
        <button type="submit">Search</button>
      </form>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="independent">Independent</option>
        <option value="dependent">Dependent</option>
      </select>
    </header>
  );
};

export default Header;