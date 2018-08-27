import React from "react";
import ProductListItem from "./ProductListItem";
import { getProductsActionCreator } from "../actionCreators/product";
import { connect } from "react-redux";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: [
    //     { id: 1, title: "Dell XPS", price: 1000, stock: 20 },
    //     { id: 2, title: "Dell", price: 700, stock: 20 },
    //     { id: 3, title: "Dell Alienware", price: 1200, stock: 20 },
    //     { id: 4, title: "Dell Pad", price: 900, stock: 20 },
    //     { id: 5, title: "Dell Mobile", price: 500, stock: 20 }
    //   ],
    //   cart: []
    // };
  }

  onAddToCart = id => {
    // //alert(`ProductList -> Product ID:${id}`);
    // const product = this.state.products.find(p => p.id == id);
    // //this.state.products[1] = { ...this.state.products[1] };
    // this.setState({ cart: [...this.state.cart, product] });
  };

  componentDidMount() {
    this.props.getProducts();
  }

  _renderProducts() {
    // return (
    //   <ul>
    //     {this.state.products
    //       ? this.state.products.map(p => (
    //           <ProductListItem
    //             key={p.id}
    //             product={{ ...p }}
    //             addToCartClicked={this.onAddToCart}
    //           />
    //         ))
    //       : null}
    //   </ul>
    // );

    return (
      <ul>
        {this.props.products
          ? this.props.products.map(p => (
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
        <h3>CART: {this.props.shoppingCart.map(p => p.title).join(" , ")}</h3>
        <h2>All good products</h2>
        {this._renderProducts()}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("mapStateToProps");
  return {
    shoppingCart: appState.productState.cart,
    products: appState.productState.products,
    isLoading: appState.productState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    getProducts: function() {
      dispatch(getProductsActionCreator());
    }
  };
}

const connectedProductList = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ConnectedProductListComponent = connectedProductList(ProductList);

export default ConnectedProductListComponent;
