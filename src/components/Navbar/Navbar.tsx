import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { NavbarTypeProps } from "../../types";

const Navbar: FunctionComponent<NavbarTypeProps> = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link className="navbar__list-element" to="/dashboard">
          Dashboard
        </Link>
        <Link className="navbar__list-element" to="/tracker">
          Tracker
        </Link>
        <Link className="navbar__list-element" to="/projects">
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
