import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS
} from "../actionTypes/product";
export default function productReducer(
  prevState = { products: [], cart: [], isLoading: false },
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
