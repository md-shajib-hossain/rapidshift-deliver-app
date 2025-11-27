import React from "react";
import { Link, Links, NavLink } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Logo from "../Logo";

// Active link style function
const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "black" : "", // Blue color when active
    backgroundColor: isActive ? "#CAEB66" : "none", // Underline when active
    padding: "8px",
  };
};

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/h" style={getLinkStyle}>
          Service
        </NavLink>
      </li>
      <li>
        <NavLink to="/coverage" style={getLinkStyle}>
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink to="/d" style={getLinkStyle}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/c" style={getLinkStyle}>
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to="/g" style={getLinkStyle}>
          Be a Rider
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm mx-auto mb-4 rounded-2xl px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Logo></Logo>{" "}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/sign-in">
            <button className="btn bg-secondary text-white mr-2 px-2 rounded py-1">
              Sign In
            </button>
          </Link>
          <Link to="/">
            {" "}
            <button className="btn bg-primary px-2 rounded py-1">
              Be a rider
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
