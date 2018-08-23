import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isAdmin: false };
  }

  getTitle() {
    return "Welcome to React - from method";
  }

  render() {
    return (
      <div className="App">
        <Header siteTitle="E-STORE" subTitle="this is sub" />
        <NavBar />
        <button onClick={() => this.setState({ isAdmin: true })}>
          Make Admin
        </button>
        {/* this is comment */}
        <Switch>
          <Route
            exact
            path="/products"
            render={props => <ProductList {...props} additionalProp="test" />}
          />
          <Route
            path="/products/new"
            render={props => {
              return this.state.isAdmin ? (
                <AddProduct />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exact path="/products/:productId" component={ProductDetail} />
          <Route exact path="/login" component={Login} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
