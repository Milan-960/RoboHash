import React from "react";

const Search = ({ searchfield, searchChange }) => {
  return (
    <>
      <input
        className="searchInput"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </>
  );
};

export default Search;
