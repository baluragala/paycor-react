import React, { Component } from "react";

class NotFound extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h2>Oops.. the page you are looking is not found</h2>
        <button onClick={() => history.goBack()}>Go Back</button>
        <button onClick={() => history.push("/products")}>
          Go To Products
        </button>
      </div>
    );
  }
}

export default NotFound;
