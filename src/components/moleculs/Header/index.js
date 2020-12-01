import React from "react";
import { useHistory } from "react-router-dom";
import { StyledLink } from "../../atoms";
import "./header.scss";

function Header() {
  const history = useHistory();

  return (
    <div className="header">
      <h2 className="logo-app">PRAKTIKUM RSBK 2020 // GROUP 16</h2>
      <div className="link-wrapper">
        <StyledLink label="Home" onClick={() => history.push("/")} />
        <StyledLink label="About" onClick={() => history.push("/about-page")} />
      </div>
    </div>
  );
}

export default Header;
