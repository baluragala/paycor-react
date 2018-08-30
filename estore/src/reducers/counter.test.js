import counterReducer from "./counter";

describe("Counter Reducer", () => {
  it("should increment value by 1 upon INC action", () => {
    let state = counterReducer({ counter: 10 }, { type: "INC", by: 1 });
    expect(state.counter).toEqual(11);
  });
});
