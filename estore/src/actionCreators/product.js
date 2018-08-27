import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS
} from "../actionTypes/product";

export const getProductsActionCreator = function() {
  return { type: GET_PRODUCTS };
};

export const getProductsSuccessActionCreator = function(products) {
  return { type: GET_PRODUCTS_SUCCESS, products };
};

export const addProductActionCreator = function(product) {
  return { type: ADD_PRODUCT, product };
};

export const addProductSuccessActionCreator = function(product) {
  return { type: ADD_PRODUCT_SUCCESS, product };
};
