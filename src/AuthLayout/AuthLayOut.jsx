import React from "react";
import Logo from "../components/Logo.jsx";
import { Outlet } from "react-router-dom";
import img1 from "../assets/authImage.png";

const AuthLayOut = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen border.">
      <div className="flex items-center justify-between  h-[800px]">
        <div className="flex-1">
          <div className="">
            <Logo></Logo>
          </div>
          <Outlet></Outlet>
        </div>
        <div className="border. bg-primary/10 flex-1 h-full">
          <img className="mt-45" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayOut;
