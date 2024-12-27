import React from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {results.map((result, index) => (
        <SearchResult key={result.id || index} result={result} />
      ))}
    </div>
  );
};

export default SearchResultsList;