import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // remove on deployment
import { rootReducer, rootSaga } from "./rootDuck";

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware))
);

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
