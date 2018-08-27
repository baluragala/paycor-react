import {
  getProductsSuccessActionCreator,
  addProductSuccessActionCreator
} from "../actionCreators/product";
import { ADD_PRODUCT, GET_PRODUCTS } from "../actionTypes/product";
import {
  takeLatest,
  put,
  all,
  take,
  fork,
  cancel,
  throttle
} from "redux-saga/effects";

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

function* handleGetProducts() {
  let taskId;
  for (;;) {
    yield take(GET_PRODUCTS);
    // if (taskId) {
    //   yield cancel(taskId);
    // }
    taskId = yield fork(getProductsFromApi);
  }
}

export function* productsWatcher() {
  yield all([
    throttle(2000, GET_PRODUCTS, getProductsFromApi),
    takeLatest(ADD_PRODUCT, AddProductToApi)
  ]); //watcher
}

/*sagas- end*/
