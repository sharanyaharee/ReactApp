import React from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {
  let status = useOnlineStatus();
  return (
    <div className="flex items-center justify-between  shadow-md">
      <div className=" ml-60 my-3">
        <Link to="/">
          <div className="w-36 ">
            <img alt="food-logo" src={LOGO_URL} />
          </div>
        </Link>
      </div>
      <div className="font-bold me-36">
        <ul className="flex justify-between gap-8 font-bold mr-40 ">
          <li className="list-items">Online:{status ? "✅" : "🔴"} </li>
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
          <Link to="/login">
            <li className="list-items">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
