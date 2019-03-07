import {combineReducers} from "redux";
import {
    REQUEST_FEED,
    REQUEST_FEED_FAIL,
    REQUEST_FEED_SUCCESS
} from "../actions/feedAction";

const initialState = {
    isFetching: false,
    feedItems: [],
    isSuccess: false,
    hasError: false,
    errorMsg: "",
    feed : []
};


export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case REQUEST_FEED:

            return {
                ...state,
                isFetching: true,
                feedItems: [],
                isSuccess: false,
                hasError: false
            }
        case REQUEST_FEED_SUCCESS :
            console.log(":iu", {
                ...state,
                isFetching: false,
                isSuccess: true,
                ...action.payload
                // hasError: true,
                // errorMsg: action.payload.error
            });
            return {
                ...state,
                isFetching: false,
                isSuccess: true,
                ...action.payload
                // hasError: true,
                // errorMsg: action.payload.error
            }
        case REQUEST_FEED_FAIL :
            console.log(action);
            return {
                ...state,
                isFetching: false,
                hasError: true,
                errorMsg: action.payload.error
            }
        // console.log(action);
        // return action.subreddit;
        default:
            return state;
    }
}

