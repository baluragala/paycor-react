import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";

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
        <Switch>
          <Route exact={true} path="/products" component={ProductList} />
          <Route path="/products/new" component={AddProduct} />
          <Route exact path="/products/:productId" component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
