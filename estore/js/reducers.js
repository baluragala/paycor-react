function counterReducer(prevState = { counter: 0 }, action) {
  console.log("counterReducer", action);
  switch (action.type) {
    case "INC":
      return { counter: prevState.counter + action.by };
    case "DEC":
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}

function productReducer(
  prevState = { products: [], isLoading: false },
  action
) {
  console.log("productReducer", action);
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...prevState, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...prevState, products: action.products, isLoading: false };
    case ADD_PRODUCT:
      return { ...prevState, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      const newProducts = [...prevState.products];
      newProducts.push(action.product);
      return { ...prevState, isLoading: false, products: newProducts };
    default:
      return prevState;
  }
}

const rootReducer = Redux.combineReducers({
  counterState: counterReducer,
  productState: productReducer
});
