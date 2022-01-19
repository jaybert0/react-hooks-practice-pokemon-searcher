import React, { useState } from "react";

function Search({ pokeData, setPokeData, searchValue, setSearchValue, wholeData }) {
  function searchHandler(e) {
    setSearchValue(e.target.value);
    let filterSearch = wholeData.filter((data) => {
      return data.name.includes(searchValue);
    });
    setPokeData(filterSearch);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={searchHandler}
          value={searchValue}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
