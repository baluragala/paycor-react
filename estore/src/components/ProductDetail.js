import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>Detail for product - {this.props.match.params.productId}</h1>
      </div>
    );
  }
}

export default ProductDetail;
