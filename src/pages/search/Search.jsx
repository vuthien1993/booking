import React from "react";
import SearchItem from "./SearchItem";
const Search = () => {
  //nhận data tư file json
  const dataSearch = require("../../data/search.json");
  return (
    <div>
      <SearchItem itemSearch={dataSearch} />
    </div>
  );
};

export default Search;
