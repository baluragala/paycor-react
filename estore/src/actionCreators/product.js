import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  TITLE_CHANGE,
  PRICE_CHANGE,
  CATEGORY_CHANGE
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

export const titleChangeActionCreator = function(title) {
  return { type: TITLE_CHANGE, title };
};

export const priceChangeActionCreator = function(price) {
  return { type: PRICE_CHANGE, price };
};

export const categoryChangeActionCreator = function(category) {
  return { type: CATEGORY_CHANGE, category };
};
