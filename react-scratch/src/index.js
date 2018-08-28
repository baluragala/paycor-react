import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Hello React 16!!!</h1>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
