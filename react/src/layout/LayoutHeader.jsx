import React, { useEffect, useRef, useState } from "react";
import { navbarClose, scrollNavbar, openNavbar, closeNavbar } from "../function/FunctionNavbar";
import Hero from "../component/hero/Hero";
import Navbar from "../component/navbar/Navbar";
import NavbarResponsive from "../component/navbar/NavbarResponsive";

const LayoutHeader = () => {
  const [shadow, setShadow] = useState(false);
  const navbar = useRef(null);
  const hamburgerBtn = useRef(null);
  const body = document.querySelector("body");

  useEffect(() => {
    scrollNavbar(setShadow, shadow);
    navbarClose(navbar, hamburgerBtn, body);
  }, []);

  return (
    <header>
      <Navbar ref={hamburgerBtn} shadow={shadow} openNavbar={() => openNavbar(navbar, body)} />
      <NavbarResponsive ref={navbar} closeNavbar={() => closeNavbar(navbar, body)} />
      <Hero />
    </header>
  );
};

export default LayoutHeader;
