import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

class App extends Component {
  getTitle() {
    return "Welcome to React - from method";
  }

  render() {
    const message = "Welcome to React";
    return (
      <div className="App">
        <Header />
        {/* this is comment */}
        <ProductList />
      </div>
    );
  }
}

export default App;