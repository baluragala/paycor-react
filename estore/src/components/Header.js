import logo from "../logo.svg";
import React from "react";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1
        className="App-title"
        title="this is a tooltip from react"
        style={{ backgroundColor: "yellow", color: "red" }}
      >
        EStore
      </h1>
    </header>
  );
}

export default Header;
