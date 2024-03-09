import React, { forwardRef } from "react";
import NavListItems from "./NavListItems";
import { Link } from "react-scroll";

const Navbar = forwardRef(({ shadow, openNavbar }, ref) => {
  return (
    <div className={`container navbar ${shadow && "scroll"}`}>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <div className="nav-logo"></div>
      </Link>
      <nav className="navbar-nav">
        <ul className="navbar-items">
          <NavListItems />
        </ul>
      </nav>
      <i onClick={openNavbar} ref={ref} className="hamburger-btn fa-solid fa-bars"></i>
    </div>
  );
});

export default Navbar;
