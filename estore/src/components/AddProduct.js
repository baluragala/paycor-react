import React, { Component } from "react";
import "./AddProduct.css";
import {
  titleChangeActionCreator,
  priceChangeActionCreator,
  categoryChangeActionCreator
} from "../actionCreators/product";

import { connect } from "react-redux";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: "iphone",
    //   price: 0,
    //   category: "Laptops",
    //   categories: ["Mobiles", "Laptops", "Clothing", "Other"]
    // };
  }

  render() {
    return (
      <div>
        <fieldset>
          <button
            onClick={() => {
              console.dir(this.stockEleRef);
              console.log(this.stockEleRef.value);
            }}
          >
            GET STOCK
          </button>
          <button onClick={() => (this.stockEleRef.value = 999)}>
            SET STOCK
          </button>
          <legend>Add Product</legend>
          <form>
            <label htmlFor="title">Product Title</label>
            <input
              type="text"
              value={this.props.title}
              onChange={e => this.props.handleTitleChange(e.target.value)}
            />
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              value={this.props.price}
              onChange={e => this.props.handlePriceChange(e.target.value)}
            />
            <label htmlFor="title">Product Category</label>
            <select
              value={this.props.category}
              onChange={e => this.props.handleCategoryChange(e.target.value)}
            >
              {this.props.categories.map(c => (
                <option key={c} id={c}>
                  {c}
                </option>
              ))}
            </select>
            <label htmlFor="stock">Product Stock</label>
            <input type="number" ref={eleRef => (this.stockEleRef = eleRef)} />
          </form>
        </fieldset>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    title: appState.productState.title,
    price: appState.productState.price,
    category: appState.productState.category,
    categories: appState.productState.categories
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    handleTitleChange: function(title) {
      dispatch(titleChangeActionCreator(title));
    },
    handlePriceChange: function(price) {
      dispatch(priceChangeActionCreator(price));
    },
    handleCategoryChange: function(category) {
      dispatch(categoryChangeActionCreator(category));
    }
  };
}

const connectedAddProduct = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ConnectedAddProductComponent = connectedAddProduct(AddProduct);

export default ConnectedAddProductComponent;
