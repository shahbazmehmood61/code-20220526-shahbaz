import React from "react";
import Logo from "../../../assets/images/logo.png";
import LogoDark from "../../../assets/images/logo_dark.png";

function Index({ isDark }) {
  return (
    <div className="header">
      <div>
        <img src={isDark ? LogoDark : Logo} alt="Logo" />
        {isDark && (
          <p>
            © 2021 Company Name <br /> All rights reserved
          </p>
        )}
      </div>
      {!isDark && <i className="fa fa-bars" aria-hidden="true"></i>}

      <div
        className={`header__links flex row justify__between items__center ${
          isDark ? "links__footer" : "links__header"
        }`}
      >
        {linkList.map((link, index) => (
          <a
            key={index}
            href="/"
            className={`header__link ${isDark ? "link__dark" : "link__white"}`}
          >
            {link.link}
          </a>
        ))}

        <button className={`header__btn ${isDark ? "header__btn__dark" : "header__btn__white"}`}>
          Call
        </button>
      </div>
    </div>
  );
}

export default Index;

const linkList = [
  { link: "Explore", route: "/" },
  { link: "About Us", route: "/" },
  { link: "Cities", route: "/" },
];
