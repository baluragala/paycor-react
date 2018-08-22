import React from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, title: "Dell XPS", price: 1000, stock: 20 },
        { id: 2, title: "Dell", price: 700, stock: 20 },
        { id: 3, title: "Dell Alienware", price: 1200, stock: 20 },
        { id: 4, title: "Dell Pad", price: 900, stock: 20 },
        { id: 5, title: "Dell Mobile", price: 500, stock: 20 }
      ],
      cart: []
    };
  }

  onAddToCart = id => {
    //alert(`ProductList -> Product ID:${id}`);
    const product = this.state.products.find(p => p.id == id);
    this.setState({ cart: [...this.state.cart, product] });
  };

  _renderProducts() {
    return (
      <ul>
        {this.state.products
          ? this.state.products.map(p => (
              <ProductListItem
                key={p.id}
                product={p}
                addToCartClicked={this.onAddToCart}
              />
            ))
          : null}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <h3>CART: {this.state.cart.map(p => p.title).join(" , ")}</h3>
        <h2>All good products</h2>
        {this._renderProducts()}
      </div>
    );
  }
}

export default ProductList;
