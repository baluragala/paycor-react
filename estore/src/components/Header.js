import logo from "../logo.svg";
import React from "react";

function Header({ siteTitle, subTitle }) {
  return (
    <header>
      <h1
        className="App-title"
        title="this is a tooltip from react"
        style={{ color: "red", fontSize: "1.5em" }}
      >
        {siteTitle}
      </h1>
      <h2>{subTitle}</h2>
    </header>
  );
}

export default Header;
