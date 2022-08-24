import React from "react";
import CityItem from "./CityItem";
function ListCity() {
  //nhận data từ file json
  const dataCity = require("../../../data/city.json");
  return (
    <div>
      <CityItem itemCity={dataCity} />
    </div>
  );
}
export default ListCity;
