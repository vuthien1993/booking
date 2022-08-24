import React from "react";
import NavBarItem from "./NavBarItem";
function NavBar() {
  // khai báo biến nhận dữ liệu từ file json
  const navBar = require("../../data/navBar.json");

  return (
    <div>
      <NavBarItem dataNavBar={navBar} />
    </div>
  );
}
export default NavBar;
