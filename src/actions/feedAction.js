export const REQUEST_FEED = 'REQUEST_FEED';
export const REQUEST_FEED_SUCCESS = 'REQUEST_FEED_SUCCESS'
export const REQUEST_FEED_FAIL = 'REQUEST_FEED_FAIL'


export function getFeedData(params) {
    const requestOptions = {
        method: 'GET',
    };
    return dispatch => {
        dispatch(request(REQUEST_FEED));
        fetch(params.url).then(response => {
            if (response.status == 200 && response.ok) {
                return response.json().then(data => {

                    let payload = {
                        feed: data.feed,
                        feedItems: data.items
                    }
                    dispatch({
                        type: REQUEST_FEED_SUCCESS,
                        payload: payload,
                    });
                }).catch(error => {
                    let payload = {
                        error: error.message
                    };
                    dispatch({
                        type: REQUEST_FEED_FAIL,
                        payload: payload,
                    });
                })
            } else {
                let payload = {
                    error: "Oops !!!Something went wrong."
                };
                dispatch({
                    type: REQUEST_FEED_FAIL,
                    payload: payload,
                });
            }
        });
    };
}


export const request = (type) => {
    return {
        type: type,
    };
};