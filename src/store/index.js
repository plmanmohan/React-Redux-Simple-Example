import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { forbiddenMiddleware } from "../middleware";
//import thunk from 'redux-thunk';

import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//import { addArticle } from '../actions';  

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenMiddleware, initialiseSagaMiddleware))
    );
//store.subscribe(() => console.log("Look at Redux is changing !"));
//store.dispatch( addArticle({ title: "React Redux tutorial", id: 1}))
initialiseSagaMiddleware.run(apiSaga);
export default store;