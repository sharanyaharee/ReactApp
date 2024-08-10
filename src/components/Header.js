import React from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {
  let status = useOnlineStatus();
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/">
          <div className="logo-container">
            <img className="logo" alt="food-logo" src={LOGO_URL} />
          </div>
        </Link>
      </div>
      <div className="right-header">
        <ul className="list">
          <li className="list-items">Online:{status ?"✅" : "🔴"} </li>
          <Link to="/">
            <li className="list-items">Home</li>
          </Link>
          <Link to="/about">
            <li className="list-items">About</li>
          </Link>
          <Link to="/contact">
            <li className="list-items">Contact</li>
          </Link>
          <li className="list-items">Cart</li>
          <li className="list-items">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
