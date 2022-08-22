import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../svg/logo.svg";

const Header = () => {
  const userId = JSON.parse(localStorage.getItem("user-id"));
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img className="w-24" src={Logo} alt="ArtBit" />
      </Link>
      <div>
        <h2 className="text-2xl">User Id: {userId}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
