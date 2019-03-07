import {combineReducers} from 'redux';
import feedReducer from './feedReducer';
import urlReducer from './urlReducer';


export default combineReducers({
    feedReducer,
    urlReducer,
});