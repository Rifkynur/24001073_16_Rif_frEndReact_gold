import React from "react";
import { social } from "../../data/data";

const FooterSocial = () => {
  return (
    <div className="footer-social">
      <h5>Connect with us</h5>
      <div className="social-links">
        {social.map((item, index) => {
          return (
            <div className="social-link-icon" key={index}>
              <a href="">
                <i className={item.icon}></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocial;
