import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "iphone x",
          price: 2000,
          stock: 20
        },
        {
          id: 2,
          title: "pixel xl",
          price: 1200,
          stock: 20
        },
        {
          id: 3,
          title: "note 7",
          price: 1000,
          stock: 20
        },
        {
          id: 4,
          title: "MI note",
          price: 600,
          stock: 20
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.products.map(p => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
