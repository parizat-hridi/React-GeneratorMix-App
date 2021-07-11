import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="">
        <div>
          <p className="footerText">
            Made with ❤️ by{" "}
            <a href="https://github.com/parizat-hridi">Parizat Binta Kabir</a>
          </p>
          Copyright © 2020-2021. All rights reserved by{" "}
          <span style={{ fontWeight: "bold" }}> gEneratorMiX</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
