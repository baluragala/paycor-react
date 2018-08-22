import React, { Component } from "react";
import "./AddProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "iphone",
      price: 0,
      category: "Laptops",
      categories: ["Mobiles", "Laptops", "Clothing", "Other"]
    };
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
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              value={this.state.price}
              onChange={e => this.setState({ price: e.target.value })}
            />
            <label htmlFor="title">Product Title</label>
            <select
              value={this.state.category}
              onChange={e => this.setState({ category: e.target.value })}
            >
              {this.state.categories.map(c => (
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

export default AddProduct;
