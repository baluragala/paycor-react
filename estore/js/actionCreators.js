const incActionCreator = function(by = 5) {
  return { type: INC, by };
};

const decActionCreator = function(by = 5) {
  return { type: DEC, by };
};

const getProductsActionCreator = function() {
  return { type: GET_PRODUCTS };
};

const getProductsSuccessActionCreator = function(products) {
  return { type: GET_PRODUCTS_SUCCESS, products };
};

const addProductActionCreator = function(product) {
  return { type: ADD_PRODUCT, product };
};

const addProductSuccessActionCreator = function(product) {
  return { type: ADD_PRODUCT_SUCCESS, product };
};
