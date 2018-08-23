import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";

class App extends Component {
  getTitle() {
    return "Welcome to React - from method";
  }

  render() {
    const message = "Welcome to React";
    return (
      <div className="App">
        <Header siteTitle="E-STORE" subTitle="this is sub" />
        <NavBar />
        {/* this is comment */}
        <Route exact={true} path="/products" component={ProductList} />
        <Route path="/products/new" component={AddProduct} />
      </div>
    );
  }
}

export default App;
