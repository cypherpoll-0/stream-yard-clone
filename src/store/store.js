import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { compose, applyMiddleware } from "redux";

import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware],
	enhancers: [composeEnhancer],
});

sagaMiddleware.run(rootSaga);

export default store;
