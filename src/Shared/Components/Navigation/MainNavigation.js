import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-naviation_menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation_title">
        <Link to="/">Your Places</Link>
      </h1>

      <nav></nav>
    </MainHeader>
  );
};

export default MainNavigation;
