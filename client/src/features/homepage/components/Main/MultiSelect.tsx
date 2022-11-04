import React from 'react';
import Select from 'react-select';
import useTropes from '../../../../hooks/useTropes';
import './MultiSelect.css';

export const MultiSelect = () => {
  
  const allTropes = useTropes();

  return (
    <div className="search-bar">
      <Select
        options={allTropes}
        isClearable={true}
        className="search"
        id="search"
        placeholder="historical, plain jane, friends to lovers"
        name="q"
      />
      <button type="submit" className="button-search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};
