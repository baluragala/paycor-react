import React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    setTimeout(() => {
      // this.state.products.push({ title: "chrome book" });
      // console.log(this.state);
      let products = [
        { title: "Dell XPS" },
        { title: "Macbook PRO" },
        { title: "HP Elitebook" }
      ];
      this.setState({
        products: [...products, { title: "chrome book" }]
      });
    }, 10000);
  }

  _renderProducts() {
    return (
      <ul>
        {this.state.products
          ? this.state.products.map(p => <li>{p.title}</li>)
          : null}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <h2>All good products</h2>
        {this._renderProducts()}
      </div>
    );
  }
}

export default ProductList;
