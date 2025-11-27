import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to="/" className="flex  items-end">
      <img src={logo} alt="logo.png" />
      <h2 className="text-3xl font-bold -ms-5">RapidShift</h2>
    </Link>
  );
};

export default Logo;
