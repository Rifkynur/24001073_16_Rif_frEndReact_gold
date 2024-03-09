import React from "react";
import FooterSocial from "../component/footer/FooterSocial";
import FooterAddress from "../component/footer/FooterAddress";
import FooterNav from "../component/footer/FooterNav";
import FooterCopyright from "../component/footer/FooterCopyright";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer">
        <FooterAddress />
        <FooterNav />
        <FooterSocial />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
