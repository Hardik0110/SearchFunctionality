import React from 'react';

const SearchResult = ({ result }) => {
  if (!result) {
    return null; // or handle the error appropriately
  }

  const { name, description } = result;

  return (
    <div>
      <h3>{name.common}</h3>
      <p>Official Name: {name.official}</p>
      <p>Description: {description}</p>
      {name.nativeName && (
        <div>
          <h4>Native Names:</h4>
          {Object.keys(name.nativeName).map((lang) => (
            <div key={lang}>
              <p>{lang}:</p>
              <p>Official: {name.nativeName[lang].official}</p>
              <p>Common: {name.nativeName[lang].common}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;