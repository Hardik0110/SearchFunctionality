import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import CountryDetailsPage from './components/CountryDetailsPage';
import CountryRegionPage from './components/CountryRegionPage';
import SelectedRegionPage from './components/SelectedRegionPage';
import Header from './components/Header';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [independentFilter, setIndependentFilter] = useState(null);

  useEffect(() => {
    const fetchData=async()=>{
     const data=await axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
    }
    fetchData()
  }, []);


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filter) => {
    setIndependentFilter(filter);
  };

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          country.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          country.cca3.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = independentFilter === null || country.independent === independentFilter;
    return matchesSearch && matchesFilter;
  });


    return (
    <Router>
      <Header onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <Routes>
        <Route path="/" element={<Homepage countries={filteredCountries} />} />
        <Route path="/country/:countryName" element={<CountryDetailsPage countries={countries} />} />
        <Route path="/country-region" element={<CountryRegionPage />} />
        <Route path="/region/:regionName" element={<SelectedRegionPage countries={filteredCountries} />} />
      </Routes>
    </Router>
  );
}

export default App;