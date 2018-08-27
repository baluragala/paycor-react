import {
  getProductsSuccessActionCreator,
  addProductSuccessActionCreator
} from "../actionCreators/product";
import { ADD_PRODUCT, GET_PRODUCTS } from "../actionTypes/product";
import { takeLatest, put, all } from "redux-saga/effects";

/*sagas- start*/
function* getProductsFromApi() {
  //worker
  let response = yield fetch("http://localhost:4000/products");
  let products = yield response.json();
  yield put(getProductsSuccessActionCreator(products));
}

function* AddProductToApi(action) {
  //worker
  let response = yield fetch("http://localhost:4000/products", {
    method: "POST",
    body: JSON.stringify(action.product),
    headers: {
      "Content-Type": "application/json"
    }
  });
  let product = yield response.json();
  yield put(addProductSuccessActionCreator(product));
}

export function* productsWatcher() {
  yield all([
    takeLatest(GET_PRODUCTS, getProductsFromApi),
    takeLatest(ADD_PRODUCT, AddProductToApi)
  ]); //watcher
}

/*sagas- end*/
