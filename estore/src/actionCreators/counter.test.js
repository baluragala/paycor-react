import { incActionCreator } from "./counter";
import { INC } from "../actionTypes/counter";

describe("Counter Action Creator", () => {
  it("should create an action with type INC and by 5", () => {
    let action = incActionCreator(5);
    expect(action).toEqual({ type: INC, by: 5 });
  });
});
