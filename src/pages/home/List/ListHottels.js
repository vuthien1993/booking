import React from "react";
import ListHottelSItem from "./ListHottelsItem";
function ListHottelS() {
  // nhận data từ file json
  const dataLists = require("../../../data/hotel_list.json");
  return (
    <div>
      <ListHottelSItem itemListHottels={dataLists} />
    </div>
  );
}
export default ListHottelS;
