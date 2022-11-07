import React from 'react';
import Select from 'react-select';
import options from "../../../../data/options.json"
import '../../styles/MultiSelect.css';

const MultiSelect = () => {
  const allTropes = options;

  return (
    <div className="search-bar">
      <Select
        options={allTropes}
        isClearable={true}
        className="search"
        id="search"
        placeholder="historical, plain jane, friends to lovers"
        name="search"
      />
      <button type="submit" className="button-search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default MultiSelect;
