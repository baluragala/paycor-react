import { INC, DEC } from "../actionTypes/counter";

export default function counterReducer(prevState = { counter: 0 }, action) {
  console.log("counterReducer", action);
  switch (action.type) {
    case INC:
      return { counter: prevState.counter + action.by };
    case DEC:
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}
