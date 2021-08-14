import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <ul className="header__list">
          <li className="header__listItem">MEN</li>
          <li className="header__listItem">WOMEN</li>
          <li className="header__listItem">KIDS</li>
          <li className="header__listItem">Home & LIVING</li>
          <li className="header__listItem">OFFERS</li>
        </ul>
      </div>
      <div className="header__search">
        <i class="fas fa-search"></i>
        <input
          type="text"
          className="header__searchBar"
          placeholder="Search for products"
        />
      </div>
    </div>
  );
};

export default Header;
