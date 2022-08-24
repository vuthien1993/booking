import React from "react";
import HottelItem from "./HottelItem";
function ListHottel() {
  // nhận data từ file json
  const dataType = require("../../../data/type.json");
  return (
    <div>
      <HottelItem itemHottel={dataType} />
    </div>
  );
}
export default ListHottel;
