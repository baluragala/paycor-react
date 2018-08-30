import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";
import Link from "./Link";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
describe("Link", () => {
  it("should render props correctly", () => {
    const wrapper = shallow(
      <Link url="https://www.zeolearn.com" title="zeolearn" />
    );
    expect(wrapper.props().href).toEqual("https://www.zeolearn.com");
    expect(wrapper.props().children).toEqual("zeolearn");
  });

  it("should handle state changes", () => {
    const wrapper = shallow(
      <Link url="https://www.zeolearn.com" title="zeolearn" />
    );
    expect(wrapper.state().clicked).toEqual(false);
    wrapper.simulate("click");
    expect(wrapper.state().clicked).toEqual(true);
  });

  it("should have called window.alert", () => {
    window.alert = jest.fn();
    const wrapper = shallow(
      <Link url="https://www.zeolearn.com" title="zeolearn" />
    );
    wrapper.simulate("click");
    expect(window.alert).toHaveBeenCalledWith("clicked!");
  });

  it("should have good snapshot", () => {
    const wrapper = shallow(
      <Link url="https://www.zeolearn.com" title="zeolearn" />
    );
    const snapshot = shallowToJson(wrapper);
    expect(snapshot).toMatchSnapshot();
  });
});
