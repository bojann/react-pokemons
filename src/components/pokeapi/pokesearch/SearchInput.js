import React from "react";

import "./SearchInput.scss";

export default function SearchInput({ pokeSearch, handleChangeSearch }) {
  return (
    <div className="search-input">
      <label htmlFor="searchItem">
        Filter Pokemon:
        <input
          id="searchItem"
          type="text"
          placeholder="search for"
          value={pokeSearch}
          onChange={handleChangeSearch}
          onBlur={handleChangeSearch}
        />
      </label>
    </div>
  );
}
