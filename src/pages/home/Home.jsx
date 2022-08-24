import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "./Header/Header";
import ListCity from "./List/ListCity";
import ListHottel from "./List/ListHottel";
import ListHottelS from "./List/ListHottels";
import FormSigUp from "./List/FormSigUp/FormSigUp";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <ListCity />
      <ListHottel />
      <ListHottelS />
      <FormSigUp />
      <Footer />
    </div>
  );
};

export default Home;
