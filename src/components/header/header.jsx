import React from "react";
import "./header.scss";
import logo from "../../assets/images/logo.png";

import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
        <div>
            <img src={logo} alt="Logo" className="img"/>
        </div>
        <div className="header_nav">
            <NavLink to="/" className="nav">
                <div className="text">Главная</div>
            </NavLink>
            <NavLink to="/add" className="nav">
                <div className="text">Добавить товар</div>
            </NavLink>
        </div>
        <div></div>
    </div>
  );
};

export default Header;
