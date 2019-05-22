import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { forbiddenMiddleware } from "../middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//import { addArticle } from '../actions';  

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenMiddleware))
    );
//store.subscribe(() => console.log("Look at Redux is changing !"));
//store.dispatch( addArticle({ title: "React Redux tutorial", id: 1}))

export default store;