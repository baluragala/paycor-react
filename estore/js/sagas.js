/*sagas- start*/
function* getProductsFromApi() {
  //worker
  let response = yield fetch("http://localhost:4000/products");
  let products = yield response.json();
  yield ReduxSaga.effects.put(getProductsSuccessActionCreator(products));
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
  yield ReduxSaga.effects.put(addProductSuccessActionCreator(product));
}

function* productsWatcher() {
  yield ReduxSaga.effects.all([
    ReduxSaga.effects.takeLatest(GET_PRODUCTS, getProductsFromApi),
    ReduxSaga.effects.takeLatest("ADD_PRODUCT", AddProductToApi)
  ]); //watcher
}

/*sagas- end*/
