import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <BsCart3 size={32} />
        </Link>
      </div>
    </div>
  );
};
