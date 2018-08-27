const sagaMiddleware = ReduxSaga.default();
const store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(sagaMiddleware, reduxLogger.createLogger())
);
sagaMiddleware.run(productsWatcher);
store.subscribe(function() {
  console.log(store.getState());
});
