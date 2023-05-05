import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header ">
      <NavLink to="/">
        <div className="text">main</div>
      </NavLink>
      <NavLink to="/add">
        <div className="text">add</div>
      </NavLink>
    </div>
  );
};

export default Header;
