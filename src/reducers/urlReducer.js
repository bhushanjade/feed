import { combineReducers } from 'redux';
import {
    ADD_URL,
    INVALIDATE_SUBREDDIT,
    REMOVE_URL,
    SELECT_URL,
} from '../actions/urlActions';

const initialState = {
    isFetching: false,
    selectedURL: null,
    urlList: [],
};

export default function(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case ADD_URL:

            return {
                ...state,
                // selectedURL:action.payload,
                urlList: [...state.urlList, action.payload],
                url: '',
            };
        // console.log(action);
        // return action.subreddit;
        case SELECT_URL:
            return {
                ...state,
                selectedURL: action.payload.url,
            };
        case REMOVE_URL:
console.log({
    // ...state,
    ...state.urlList.slice(0, action.payload.url),
    // selectedURL: action.payload.url,
});
            return {
                // ...state,
                ...state.urlList.slice(0, action.payload.url),
                // selectedURL: action.payload.url,
            };
        default:
            return state;
    }
}

