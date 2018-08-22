import logo from "../logo.svg";
import React from "react";

function Header() {
  return (
    <header>
      <h1
        className="App-title"
        title="this is a tooltip from react"
        style={{ color: "red", fontSize: "1.5em" }}
      >
        EStore
      </h1>
    </header>
  );
}

export default Header;
