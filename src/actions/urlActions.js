export const ADD_URL = 'ADD_URL';
export const REMOVE_URL = 'REMOVE_URL'
export const SELECT_URL = 'SELECT_URL'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function add(params) {
    console.log("add",params);
    return dispatch => {
        dispatch({
            type: ADD_URL,
            payload: params,
        });

    }
}

export function select(params) {
    // console.log("add",params);
    return dispatch => {
        dispatch({
            type: SELECT_URL,
            payload: params,
        });

    }
}

export function removeURL(params) {
    // console.log("add",params);
    return dispatch => {
        dispatch({
            type: REMOVE_URL,
            payload: params,
        });

    }
}



