/**
 * Created by bhushan on 17/8/18.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

/*todo ; DISABLD for production . Need for Dev mode
 // const devTools = process.env.NODE_ENV === 'development'
 //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
 //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
 //     : null;
 */
const store = createStore(
    rootReducer,
    inititalState,
    applyMiddleware(thunk),
    //    compose(applyMiddleware(thunk)), //todo ; DISABLD for production . Need for Dev mode

);

export default store;
