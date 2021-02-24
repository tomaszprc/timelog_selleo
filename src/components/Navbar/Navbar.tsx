import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = ({}) => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link className="navbar__list-element" to="/dashboard">
          Dashboard
        </Link>
        <Link className="navbar__list-element" to="/timer">
          Timer
        </Link>
        <Link className="navbar__list-element" to="/projects">
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
