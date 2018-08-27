import counterReducer from "./counter";
import productReducer from "./product";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterState: counterReducer,
  productState: productReducer
});

export default rootReducer;
