import React from "react";
import "./styles.scss";
import Logo from "./../../assets/logo-vnd.png"
import Hamburger from "./../../assets/hamburger-menu.svg"

const Header = props => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Vance's logo" />
        </div>
        <h3 className="nameTitle">Vance Denson.</h3>
        <ul className="menu-items">
          <li>
            <h2>About</h2>
          </li>
          <li>
            <h2>Skills</h2>
          </li>
          <li>
            <h2>Resume</h2>
          </li>
        </ul>
        <div className="menu-dropdown" onClick>
          <img src={Hamburger} alt="Dropdown Menu" />
        </div>
      </div>
    </header >
  );
};

export default Header;
