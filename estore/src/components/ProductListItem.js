import React, { Component, PureComponent } from "react";
import "./ProductListItem.css";
import PropTypes from "prop-types";

class ProductListItem extends PureComponent {
  constructor(props) {
    super(props);
    console.log("1-constructor");
  }

  componentDidMount() {
    console.log("3-componentDidMount");
  }

  componentDidUpdate() {
    console.log("4-componentDidUpdate");
  }
  render() {
    console.log("2-render");
    const { title, price, stock, id } = this.props.product;
    return (
      <div className="item">
        <h1>
          {title}({stock})
        </h1>
        <h3>{price}</h3>
        <button
          onClick={e => {
            console.log(e.target.textContent);
            this.props.addToCartClicked(id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }),
  addToCartClicked: PropTypes.func.isRequired
};

ProductListItem.defaultProps = {
  product: { title: "no title" }
};

export default ProductListItem;
