import React from "react";
import FooterItem from "./FooterItem";
function Footer() {
  // nhận data từ file json
  const dataFooter = require("../../../data/footer.json");
  return (
    <div>
      <FooterItem itemFooter={dataFooter} />
    </div>
  );
}

export default Footer;
