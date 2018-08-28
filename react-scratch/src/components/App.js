import React from "react";
import Products from "./Products";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h3>Products App</h3>
          </div>
        </div>
        <div>
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
