import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProductListItem from "./ProductListItem";

Enzyme.configure({ adapter: new Adapter() });

describe("ProductListItem", () => {
  let wrapper;
  beforeEach(function() {
    wrapper = Enzyme.shallow(
      <ProductListItem
        product={{
          title: "iphone",
          price: 2000,
          stock: 20,
          id: 100
        }}
        addToCartClicked={() => {}}
      />
    );
  });

  it("should render product price as h3", () => {
    console.log(wrapper.find("h3").debug());
    expect(wrapper.find("h3").length).toEqual(1);
  });

  it("should render props correctly", () => {
    console.log(wrapper.props());
    expect(wrapper.props().product).toEqual({
      title: "iphone",
      price: 2000,
      stock: 20,
      id: 100
    });
  });

  it("should call addToCartClicked on Add to cart button clicked", () => {
    wrapper.props().addToCartClicked = jest.fn(); // mock
    wrapper.find("button").simulate("click");
    expect(wrapper.props().addToCartClicked).toHaveBeenCalled();
  });
});
