import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Withdraw from "../Withdraw/Withdraw";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </>
  );
};

export default Main;
