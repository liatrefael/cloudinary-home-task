import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import { asyncActionsMiddleware } from './actions/network_middleware';

const enhancers = [];
const middleware = [
     thunk,
    asyncActionsMiddleware
];

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(rootReducer, {}, composedEnhancers);

store.subscribe(() => {
});

export default store;
