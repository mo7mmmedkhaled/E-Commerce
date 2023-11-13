import React from "react";
import "./NavBar.css";
import { BsBagFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt=""></img>
        </Link>
      </div>
      <ul className="nav-menu">
        <NavLink to="/">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/mens">
          <li>Men</li>
        </NavLink>
        <NavLink to="/womens">
          <li>Women</li>
        </NavLink>
        <NavLink to="/kids">
          <li>Kids</li>
        </NavLink>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="cart">
          <BsBagFill className="cart-bag" />
          <div className="cart-count">0</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
