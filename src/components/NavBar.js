import React from "react";
import { Link } from "react-router-dom";

// imoprt imagee
import Logo from '../res/logo.png'

function NavBar() {
  return (
    <div>
      <ul className="nav-bar">
      <li>
          <Link to="/"><img src={Logo} alt='logo' /></Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sectors">Sectors</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
