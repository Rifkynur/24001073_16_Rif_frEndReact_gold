import React, { forwardRef } from "react";
import NavListItems from "./NavListItems";

const NavbarResponsive = forwardRef(({ closeNavbar }, ref) => {
  return (
    <nav className="navbar-nav-mobile" ref={ref}>
      <ul className="navbar-items">
        <div className="bcr">
          <span>BCR</span>
          <i onClick={closeNavbar} className="close-btn fa-solid fa-x"></i>
        </div>
        <NavListItems />
      </ul>
    </nav>
  );
});

export default NavbarResponsive;
