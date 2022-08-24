import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../home/Footer/Footer";
import FormSigUp from "../home/List/FormSigUp/FormSigUp";
import DetailItem from "./DetailItem";
const Detail = () => {
  // nhận data từ file json
  const dataDetail = require("../../data/detail.json");
  return (
    <div>
      <NavBar />
      <DetailItem itemDetail={dataDetail} />
      <FormSigUp />
      <Footer />
    </div>
  );
};

export default Detail;
