import React from "react";
import "./styles.scss";
import Logo from "../logo/Logo";
import SearchInputBarContainer from "../searchInputBar/SearchInputBarContainer";

const NavSearchBar = (props) => {
  return (
    <div className="navbar-wrapper">
      <div className="container bar-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="search-bar">
          <SearchInputBarContainer />
        </div>
      </div>
    </div>
  );
};

export default NavSearchBar;
