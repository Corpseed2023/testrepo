import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Logo</div>
      <div>
        <ul className="nav-link">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
