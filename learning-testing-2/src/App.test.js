import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  it("should render props correctly", () => {
    const wrapper = shallow(
      <Link url="https://www.zeolearn.com" title="zeolearn" />
    );
    console.log(wrapper);
    expect(wrapper.props().href).toEqual("https://www.zeolearn.com");
    expect(wrapper.props().children).toEqual("zeolearn");
  });

  it("should handle state changes", () => {});
});
