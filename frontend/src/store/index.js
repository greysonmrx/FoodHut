import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import persistReducers from "./persistReducers";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  persistReducers(rootReducer),
  applyMiddleware(...middlewares)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
